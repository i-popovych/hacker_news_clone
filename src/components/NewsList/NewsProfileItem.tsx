import React, {FC} from 'react';
import s from "./News.module.scss"
import NewsItemInfo from "./NewsItemInfo";
import {useActions} from "../../hooks/useActions";
import {INews, INews2} from "../../model/INews";


const NewsProfileItem: FC<INews2> = (props) => {
    const {profileThunk} = useActions();
    const onDelete = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        profileThunk.deleteNews(props.id);
    }

    return (
        <article className={s.item}>
            <NewsItemInfo {...props}/>
            <button className={s.sendButton} onClick={onDelete}>delete</button>
        </article>
    );
};

export default NewsProfileItem;