import React, {FC, useContext, useState} from 'react';
import s from "./News.module.scss"
import NewsItemInfo from "./NewsItemInfo";
import {useActions} from "../../hooks/useActions";
import {INews, INews2} from "../../model/INews";
import { ProfileContext } from '../../pages/Profile';
import NewsAPI from "../../api/news";
import profileAPI from "../../api/profle";
import {ArrowClockwise, Bookmark, BookmarkFill} from "react-bootstrap-icons";


const NewsProfileItem: FC<INews2> = (props) => {
    // const {profileThunk} = useActions();
    // const onDelete = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     profileThunk.deleteNews(props.id);
    // }


    const {profileActions} = useActions()
    const [isNewsDeleting, setIsNewsDeleting] = useState(false)
    const onDeleteFromState = useContext(ProfileContext);
    const deleteNews = async (id: string) => {
        setIsNewsDeleting(true)
        try {
            await profileAPI.deleteNews(id)
        } catch (e: any) {
            console.log(e.message)
        }
        profileActions.deleteSavedNewsId(id);
        onDeleteFromState(id)
        setIsNewsDeleting(false)
    }


    return (
        <article className={s.item}>
            <NewsItemInfo {...props}/>
            <div className={s.item__newsStatusContainer}>
            {
                isNewsDeleting ? <div><ArrowClockwise className={s.loading}/></div>
                        : <div onClick={() => deleteNews(props.id)}><BookmarkFill className={s.savedText}/></div>
            }
            </div>
            {/*<button className={s.sendButton} onClick={() => onDeleteFromState(props.id)}>delete</button>*/}
        </article>
    );
};

export default NewsProfileItem;