import React, {FC, useEffect} from 'react';

import {useSelector} from "react-redux";
import NewsList from "../components/NewsList/NewsList";
import Preloader from "../components/common/Preloader/Preloader";
import PaginationUI from "../components/common/Pagination/PaginationUI";
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
import {INews} from "../models/INews";
import NewsHeader from "../components/NewsHeader/NewsHeader";
import NewsItem from "../components/NewsList/NewsItem";

interface IProps {
    newsList: INews[]
    searchNewsArr: INews[]
    isSearching: boolean
    isLoading: boolean
    currentNewsData: { limit: number, page: number }
    totalCount: number
    fetchNews: (page: number, limit: number) => void
    filterNews: (value: string) => void
    setCurrentNewsDataPage: (page: string) => void
    setSearchingStatus: (bool: boolean) => void
    searchNews: (value: string) => void
    setCurrentNewsDataLimit: (limit: string) => void
    headerName: string
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
            <NewsHeader title={props.headerName}/>
            <NewsForm searchInp={searchInp} setSearchInp={setSearchInp} {...props}/>
            {loadingSearch ? <NewsList newsList={searchNewsArr} ChildrenItem={NewsItem}/>
                : <NewsList newsList={newsList} ChildrenItem={NewsItem}/>}
            <PaginationUI onChangePage={setCurrentNewsDataPage}
                          currentPage={currentNewsData.page} countItems={totalCount}
                          limit={currentNewsData.limit}/>
        </div>
    );
};

interface Props {
    type: 'topstories' | 'newstories'
    headerName: string
}

const NewsContainer: FC<Props> = ({type, headerName}) => {
    const newsList = useSelector(getNewsList)
    const searchNewsArr = useSelector(getSearchingNews)
    const isSearching = useSelector(getSearchingStatus)
    const isLoading = useSelector(getLoadingStatus)
    const currentNewsData = useSelector(getCurrentNewsData) as { page: number, limit: number }
    const totalCount = useSelector(getTotalCount)

    const {newsThunk, newsActions} = useActions();
    useEffect(() => {
        (async function () {
            await newsThunk.fetchNews(currentNewsData.page, currentNewsData.limit, type)
        })()
    }, [currentNewsData.page, currentNewsData.limit, type])

    return isLoading ? <Preloader/> :
        <News
            headerName={headerName}
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