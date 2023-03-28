import React, {FC} from 'react';
import {INews} from '../../models/INews';
import s from "./News.module.scss";
import {ChatLeft, ClockFill, PersonFill, Triangle, Window} from "react-bootstrap-icons";
import {getDateFromMill, getMainPartUrl} from '../../utils/utils';


const NewsItemInfo: FC<INews> = ({
                                      title, score, by,
                                      descendants, url, index, time, id
                                  }) => {
    return (
        <div className={s.item__info}>
            <div className={s.item__left}>
                <div className={s.index}>{index}</div>
                <div className={s.scope}>
                    <Triangle className={s.scope__img}/>
                    <span>{score}</span>
                </div>
                <div className={s.title}><a href={url || `https://news.ycombinator.com/item?id=${id}`}>{title}</a></div>
            </div>
            <div className={s.item__right}>
                <div className={s.by}>
                    <PersonFill/>
                    <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>
                </div>
                <div className={s.url}>
                    <Window/>
                    <a href={url}>
                    {url ? getMainPartUrl(url) : 'news.ycombinator.com'}
                </a>
                </div>
                <div className={s.time}>
                    <ClockFill/>
                    {
                        getDateFromMill(time * 1000)
                    }
                </div>
                <div className={s.countComment}>
                    <ChatLeft/>
                    <span>{descendants}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsItemInfo;