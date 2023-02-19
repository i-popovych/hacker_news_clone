import React, {useEffect} from 'react';
import {
    getCurrentNewsData,
    getLoadingStatus,
    getNewsList,
    getSearchingNews,
    getSearchingStatus,
    getTotalCount
} from "../selectors/selectors";
import {connect} from "react-redux";
import NewsList from "../components/NewsList/NewsList";
import {
    fetchNews,
    filterNews,
    searchNews,
    setCurrentNewsDataLimit,
    setCurrentNewsDataPage,
    setSearchingStatus
} from "../redux/newsReducer";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";
import {useSearch} from "../hooks/form";
import NewsForm from "../components/NewsForm/NewsForm";

const News = ({addNews, isSearching, ...props}) => {
    const [searchInp, setSearchInp, loadingSearch] = useSearch(props.searchNews);
    return (
        <div>
            <NewsForm searchInp={searchInp} setSearchInp={setSearchInp} {...props}/>
            {loadingSearch ? <NewsList newsList={props.searchNewsArr}/> : <NewsList newsList={props.newsList}/>}
            <Pagination onChangePage={props.setCurrentNewsDataPage}
                currentPage={props.currentNewsData.page} countItems={props.totalCount} limit={props.currentNewsData.limit}/>
        </div>
    );
};

const NewsContainer = ({fetchNews, isLoading, ...props}) => {
    useEffect(() => {
        (async function() {
            await fetchNews(props.currentNewsData.page, props.currentNewsData.limit)
        })()
    }, [props.currentNewsData.page, props.currentNewsData.limit])

    return isLoading ? <Preloader/> : <News {...props}/>
}

const mapStateToProps = state => {
    return {
        newsList: getNewsList(state),
        searchNewsArr: getSearchingNews(state),
        isSearching: getSearchingStatus(state),
        isLoading: getLoadingStatus(state),
        currentNewsData: getCurrentNewsData(state),
        totalCount: getTotalCount(state)
    };
}

export default connect(mapStateToProps,
    {fetchNews, filterNews, setCurrentNewsDataPage,
    setSearchingStatus, searchNews, setCurrentNewsDataLimit})(NewsContainer);