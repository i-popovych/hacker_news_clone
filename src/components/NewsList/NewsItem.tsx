import React, {FC, useState} from 'react';
import s from "./News.module.scss"
import {useSelector} from "react-redux";
import NewsItemInfo from "./NewsItemInfo";
import {getSavedNewsId} from "../../selectors/profile";
import {useClickLoading} from "../../hooks/useLoading";
import {useActions} from "../../hooks/useActions";
import {INews} from "../../models/INews";
import {ArrowClockwise, Bookmark, BookmarkFill} from "react-bootstrap-icons";


const NewsItem: FC<INews> = ({id, ...props}) => {
    const savedNewsId = useSelector(getSavedNewsId);

    const [isNewsAdding, setIsNewsAdding] = useClickLoading(savedNewsId, id, savedNewsId)
    const [isDeleting, setIsDeleting] = useState(false)
    const {profileThunk} = useActions()
    const onAdd = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsNewsAdding(true)
        profileThunk.addNews(id)
    }

    const onDelete = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsDeleting(true);
        await profileThunk.deleteNews(id);
        setIsDeleting(false);
    }

    let isHas = savedNewsId.includes(id)
    return (
        <article className={s.item}>
            <NewsItemInfo id={id} {...props}/>
            <div className={s.item__newsStatusContainer}>
                {
                    (isNewsAdding || isDeleting) ? <div><ArrowClockwise className={s.loading}/></div> :
                    !isHas ?
                        <div className={s.sendButton} onClick={onAdd}><Bookmark className={s.noSavedText}/></div>
                        : <div onClick={onDelete}><BookmarkFill className={s.savedText}/></div>
                }
            </div>
        </article>
    );
};

export default NewsItem;