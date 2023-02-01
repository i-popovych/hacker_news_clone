import React, {useMemo} from 'react';
import s from "./News.module.css"
import {useDispatch, useSelector} from "react-redux";
import NewsItemInfo from "./NewsItemInfo";
import {getSavedNewsId} from "../../selectors/profile";
import {addNews} from "../../redux/profileReducer";
import {useClickLoading} from "../../hook/useLoading";

const NewsItem = (props) => {
    const dispatch = useDispatch();
    const savedNewsId = useSelector(state => getSavedNewsId(state));

    const [isNewsAdding, setIsNewsAdding] = useClickLoading(savedNewsId, props._id, savedNewsId)

    const onAdd = e => {
        e.preventDefault();
        setIsNewsAdding(true)
        dispatch(addNews(props._id));
    }

    let isHave = useMemo(() => savedNewsId.includes(props._id), [savedNewsId])
    return (
        <article className={s.item}>
            <NewsItemInfo {...props}/>
            {   isNewsAdding ? 'load' :
                !isHave ? <button className={s.sendButton} onClick={onAdd}>save news</button>
                : 'saved'
            }
        </article>
    );
};

export default NewsItem;