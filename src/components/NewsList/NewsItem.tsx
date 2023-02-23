import React, {FC, useMemo} from 'react';
import s from "./News.module.css"
import {useDispatch, useSelector} from "react-redux";
import NewsItemInfo from "./NewsItemInfo";
import {getSavedNewsId} from "../../selectors/profile";
// @ts-ignore
import {useClickLoading} from "../../hooks/useLoading";
import {useActions} from "../../hooks/useActions";
import {INews} from "../../model/INews";


const NewsItem: FC<INews> = ({_id, ...props}) => {
    const dispatch = useDispatch();
    const savedNewsId = useSelector(getSavedNewsId);

    const [isNewsAdding, setIsNewsAdding] = useClickLoading(savedNewsId, _id, savedNewsId)
    const {profileThunk} = useActions()
    const onAdd = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsNewsAdding(true)
        profileThunk.addNews(_id)
    }

    let isHave = useMemo(() => savedNewsId.includes(_id), [savedNewsId])
    return (
        <article className={s.item}>
            <NewsItemInfo _id={_id} {...props}/>
            {   isNewsAdding ? 'load' :
                !isHave ? <button className={s.sendButton} onClick={onAdd}>save news</button>
                : 'saved'
            }
        </article>
    );
};

export default NewsItem;