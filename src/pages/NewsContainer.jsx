import React, {useEffect, useState} from 'react';
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
import MySelect from "../UI/MySelect";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";
import {useSelect} from "../hook/form";

const News = ({addNews, isSearching, ...props}) => {
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useState(props.currentNewsData.limit);
    const [searchInp, setSearchInp] = useState("");

    const [pressedSelect, setPressedSelect] = useSelect(props.filterNews);


    useEffect(() => {
        if(searchInp) {
            props.setSearchingStatus(true);
            props.searchNews(searchInp);
        } else props.setSearchingStatus(false);
    }, [searchInp])

    useEffect(() => {
        props.setCurrentNewsDataLimit(pressedSelectNewsCount)
    }, [pressedSelectNewsCount])

    return (
        <div>
            <input type="text" value={searchInp}
                   onChange={e => setSearchInp(e.target.value)} placeholder={"enter search input"}/>
            <MySelect value={pressedSelectNewsCount} defaultValue={"enter news count"} selectChange={setPressedSelectNewsCount}
                      options={[
                          {value: '5', name: '5'},
                          {value: '10', name: '10'},
                          {value: '15', name: '15'},
                      ]}/>
            <MySelect value={pressedSelect} defaultValue={"enter whatever"} selectChange={setPressedSelect}
                      options={[
                          {value: '_id', name: 'filter by id'},
                          {value: 'title', name: 'filter by title'},
                      ]}/>
            {isSearching ? <NewsList newsList={props.searchNewsArr}/> : <NewsList newsList={props.newsList}/>}
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
    return (
        <News {...props}/>
    )
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