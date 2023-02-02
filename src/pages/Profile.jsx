import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {getSavedNews} from "../selectors/profile";
import NewsList from "../components/NewsList/NewsList";
import {useSearch} from "../hook/form";
import Search from "../components/Search/Search";
import SelectFilter from "../components/SelectFilter/SelectFilter";

const Profile = () => {
    const [searchInp, setSearchInp] = useSearch();
    const [filter, setFilter] = useState(null);
    let newsList = useSelector(state => getSavedNews(state, searchInp));
    if(filter) newsList = newsList.sort((a, b) => a[filter].localeCompare(b[filter]))
    return (
        <div>
            <Search setSearchInp={setSearchInp} searchInp={searchInp}/>
            <SelectFilter filterNews={setFilter}/>
            <NewsList newsList={newsList}/>
        </div>
    );
};

export default Profile;