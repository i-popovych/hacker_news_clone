import React, {useEffect, useMemo} from 'react';
import s from "./News.module.css"
import {useDispatch, useSelector} from "react-redux";
import NewsItemInfo from "./NewsItemInfo";
import {getLoadingNews, getSavedNewsId} from "../../selectors/profile";
import {addNews, fetchSavedNews} from "../../redux/profileReducer";

const NewsItem = (props) => {
    const dispatch = useDispatch();
    const savedNewsId = useSelector(state => getSavedNewsId(state));
    const loadingNewsId = useSelector(state => getLoadingNews(state));

    const onAdd = e => {
        e.preventDefault();
        dispatch(addNews(props._id));
    }
    const checkHave = (arr, id) => arr.includes(id);

    let isHave = useMemo(() => checkHave(savedNewsId, props._id), [savedNewsId])
    let isLoading = useMemo(() => checkHave(loadingNewsId, props._id), [loadingNewsId])
    return (
        <article className={s.item}>
            <NewsItemInfo {...props}/>
            {   isLoading ? 'load' :
                !isHave ? <button className={s.sendButton} onClick={onAdd}>save news</button>
                : 'saved'
            }
        </article>
    );
};

export default NewsItem;