import React, {useMemo, useState} from 'react';
import {useSelector} from "react-redux";
import {getSavedNews, getSavedNewsLength} from "../selectors/profile";
import NewsList from "../components/NewsList/NewsList";
import {useSearch} from "../hooks/form";
import Pagination from "../common/Pagination/Pagination";
import SavedNewsForm from "../components/SavedNewsForm/SavedNewsForm";
import {sortByStr} from "../utils/utils";

const Profile = () => {
    const [searchInp, setSearchInp] = useSearch('');
    const [filter, setFilter] = useState('');
    const totalNews = useSelector(getSavedNewsLength)
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    let newsList = useSelector(state => getSavedNews(state, page, limit, searchInp));
    useMemo(() => {
        if (filter) newsList = sortByStr(newsList, filter);
    }, [filter])

    return (
        <div>
            <SavedNewsForm
                limit={limit} setLimit={setLimit} searchInp={searchInp}
                setSearchInp={setSearchInp} setFilter={setFilter}
            />
            <NewsList newsList={newsList}/>
            {!searchInp && <Pagination onChangePage={setPage} limit={limit} countItems={totalNews} currentPage={page}/>}
        </div>
    );
};

export default Profile;