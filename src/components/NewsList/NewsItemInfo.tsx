import React, {FC} from 'react';
import {INews2} from '../../model/INews';
import s from "./News.module.scss";
import {ChatLeft, ClockFill, PersonFill, Triangle, Window} from "react-bootstrap-icons";
import {getDateFromMill, getMainPartUrl} from '../../utils/utils';


const NewsItemInfo: FC<INews2> = ({
                                      title, score, by,
                                      descendants, url, index, time
                                  }) => {
    return (
        <div className={s.item__info}>
            <div className={s.item__left}>
                <div className={s.index}>{index}</div>
                <div className={s.scope}>
                    <Triangle className={s.scope__img}/>
                    <span>{score}</span>
                </div>
                <div className={s.title}>{title}</div>
            </div>
            <div className={s.item__right}>
                <div className={s.by}>
                    <PersonFill/>
                    <span>{by}</span>
                </div>
                <div className={s.url}>
                    <Window/>
                    <span>
                    {url ? getMainPartUrl(url) : 'news.ycombinator.com'}
                </span>
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