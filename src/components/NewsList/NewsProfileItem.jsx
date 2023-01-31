import React from 'react';
import s from "./News.module.css"
import {useDispatch} from "react-redux";
import {deleteNews} from "../../redux/profileReducer";
import NewsItemInfo from "./NewsItemInfo";

const NewsProfileItem = (props) => {
    const dispatch = useDispatch();
    const onDelete = (e) => {
        e.preventDefault();
        dispatch(deleteNews(props._id));
    }

    return (
        <article className={s.item}>
            <NewsItemInfo {...props}/>
            <button className={s.sendButton} onClick={(e) => onDelete(e)}>delete</button>
        </article>
    );
};

export default NewsProfileItem;