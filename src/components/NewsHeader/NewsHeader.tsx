import React, {FC} from 'react';
import s from './NewsHeader.module.scss'

const NewsHeader: FC<{title: string}> = ({title}) => {
    return (
        <header className={s.newsHeader}>
            <h1 className={s.newsHeader__title}>{title}</h1>
            <div className={s.newsHeader__lnk}><a href="https://news.ycombinator.com/submit">Submit</a></div>
        </header>
    );
};

export default NewsHeader;