import React, {useEffect, useMemo} from 'react';
import s from "./News.module.css"
import {useDispatch, useSelector} from "react-redux";
import NewsItemInfo from "./NewsItemInfo";
import {getSavedNewsId} from "../../selectors/profile";
import {addNews, fetchSavedNews} from "../../redux/profileReducer";

const NewsItem = (props) => {
    const dispatch = useDispatch();
    const savedNewsId = useSelector(state => getSavedNewsId(state));

    const onAdd = e => {
        e.preventDefault();
        dispatch(addNews(props._id));
    }
    const checkHave = (arr, id) => {
        console.log('check have')
        return arr.includes(id);
    }

    let isHave = useMemo(() => checkHave(savedNewsId, props._id), [savedNewsId])
    return (
        <article className={s.item}>
            <NewsItemInfo {...props}/>
            {!isHave && <button className={s.sendButton} onClick={onAdd}>send</button>}
        </article>
    );
};

export default NewsItem;