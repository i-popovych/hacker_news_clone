import React from 'react';
import {useSelector} from "react-redux";
import {getSavedNews} from "../selectors/profile";
import NewsList from "../components/NewsList/NewsList";

const Profile = () => {
    const newsList = useSelector(state => getSavedNews(state));
    return (
        <div>
                <NewsList newsList={newsList}/>
        </div>
    );
};



export default Profile;