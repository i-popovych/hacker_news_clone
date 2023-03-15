import React, {FC, useMemo, useState} from 'react';
import s from "./News.module.scss"
import {useSelector} from "react-redux";
import NewsItemInfo from "./NewsItemInfo";
import {getSavedNewsId} from "../../selectors/profile";
import {useClickLoading} from "../../hooks/useLoading";
import {useActions} from "../../hooks/useActions";
import {INews} from "../../model/INews";
import {ArrowClockwise, Bookmark, BookmarkFill} from "react-bootstrap-icons";


const NewsItem: FC<INews> = ({_id, ...props}) => {
    const savedNewsId = useSelector(getSavedNewsId);

    const [isNewsAdding, setIsNewsAdding] = useClickLoading(savedNewsId, _id, savedNewsId)
    const [isDeleting, setIsDeleting] = useState(false)
    const {profileThunk} = useActions()
    const onAdd = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsNewsAdding(true)
        profileThunk.addNews(_id)
    }

    const onDelete = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsDeleting(true);
        await profileThunk.deleteNews(_id);
        setIsDeleting(false);
    }

    let isHave = useMemo(() => savedNewsId.includes(_id), [savedNewsId])
    return (
        <article className={s.item}>
            <NewsItemInfo _id={_id} {...props}/>
            <div className={s.item__newsStatusContainer}>
                {
                    (isNewsAdding || isDeleting) ? <div><ArrowClockwise className={s.loading}/></div> :
                    !isHave ?
                        <div className={s.sendButton} onClick={onAdd}><Bookmark className={s.noSavedText}/></div>
                        : <div onClick={onDelete}><BookmarkFill className={s.savedText}/></div>
                }
            </div>
        </article>
    );
};

export default NewsItem;