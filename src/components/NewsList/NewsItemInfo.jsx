import React from 'react';
import s from "./News.module.css";

const NewsItemInfo = ({_id, title, countLike, authorName, countComment, linkTitle}) => {
    return (
        <>
            <div className={s.id}>id: {_id}</div>
            <div className={s.title}>title: {title}</div>
            <div className={s.countLike}>countLike: {countLike}</div>
            <div className={s.authorName}>authorName: {authorName}</div>
            <div className={s.countComment}>countComment: {countComment}</div>
            <div className={s.linkTitle}>linkTitle: {linkTitle}</div>
        </>
    );
};

export default NewsItemInfo;