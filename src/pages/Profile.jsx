import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSavedNews} from "../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {getLoadingStatus, getSavedNews} from "../selectors/profile";
import NewsList from "../components/NewsList/NewsList";

const Profile = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => getLoadingStatus(state));
    const newsList = useSelector(state => getSavedNews(state));
    return (
        <div>
                <NewsList newsList={newsList}/>
        </div>
    );
};

export default Profile;