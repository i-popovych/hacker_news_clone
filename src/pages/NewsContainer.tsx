import React, {FC, useEffect} from 'react';

import {useSelector} from "react-redux";
import NewsList from "../components/NewsList/NewsList";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";
import {useSearch} from "../hooks/form";
import NewsForm from "../components/NewsForm/NewsForm";
import {useActions} from "../hooks/useActions";
import {
    getCurrentNewsData,
    getLoadingStatus,
    getNewsList,
    getSearchingNews,
    getSearchingStatus,
    getTotalCount
} from "../selectors/selectors";
import {INews} from "../model/INews";
import NewsHeader from "../components/NewsHeader/NewsHeader";

interface IProps {
    newsList: INews[]
    searchNewsArr: INews[]
    isSearching: boolean
    isLoading: boolean
    currentNewsData: {limit: number, page: number}
    totalCount: number
    fetchNews: (page: number, limit: number) => void
    filterNews: (value: string) => void
    setCurrentNewsDataPage: (page: string) => void
    setSearchingStatus: (bool: boolean) => void
    searchNews: (value: string) => void
    setCurrentNewsDataLimit: (limit: string) => void
}

const News: FC<IProps> = (props) => {
    const {
        searchNews,
        searchNewsArr,
        newsList,
        setCurrentNewsDataPage,
        currentNewsData,
        totalCount
    } = props;
    const [searchInp, setSearchInp, loadingSearch] = useSearch(searchNews);
    return (
        <div>
            <NewsHeader title={'News'}/>
            <NewsForm searchInp={searchInp} setSearchInp={setSearchInp} {...props}/>
            {loadingSearch ? <NewsList newsList={searchNewsArr}/> : <NewsList newsList={newsList}/>}
            <Pagination onChangePage={setCurrentNewsDataPage}
                        currentPage={currentNewsData.page} countItems={totalCount}
                        limit={currentNewsData.limit}/>
        </div>
    );
};

const NewsContainer: FC = () => {
    const newsList = useSelector(getNewsList)
    const searchNewsArr = useSelector(getSearchingNews)
    const isSearching = useSelector(getSearchingStatus)
    const isLoading = useSelector(getLoadingStatus)
    const currentNewsData = useSelector(getCurrentNewsData) as { page: number, limit: number }
    const totalCount = useSelector(getTotalCount)

    const {newsThunk, newsActions} = useActions();
    useEffect(() => {
        (async function () {
            await newsThunk.fetchNews(currentNewsData.page, currentNewsData.limit)
        })()
    }, [currentNewsData.page, currentNewsData.limit])

    return isLoading ? <Preloader/> :
        <News
            newsList={newsList}
            searchNewsArr={searchNewsArr}
            isSearching={isSearching}
            isLoading={isLoading}
            currentNewsData={currentNewsData}
            totalCount={totalCount}

            fetchNews={newsThunk.fetchNews}
            filterNews={newsActions.filterNews}
            setCurrentNewsDataPage={newsActions.setCurrentNewsDataPage}
            setSearchingStatus={newsActions.setSearchingStatus}
            searchNews={newsActions.searchNews}
            setCurrentNewsDataLimit={newsActions.setCurrentNewsDataLimit}
        />
}
export default NewsContainer