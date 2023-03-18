import React, { FC } from 'react';
import s from "./News.module.scss"
import NotFound from "../NotFound";
import NewsProfileItem from "./NewsProfileItem";
import NewsItem from "./NewsItem";
import {INews, INews2} from '../../model/INews';

interface Props {
    newsList: INews2[]
}

const NewsList: FC<Props> = ({newsList, ...props}) => {
    if(!newsList.length) return <NotFound/>
    //todo change location get method
    let site = window.location.href.split('/').at(-1)
    let Item = site === 'profile' ? NewsProfileItem : NewsItem

    return (
        <section className={s.newsList}>
            {
                newsList.map(i => {
                    return <Item key={i.id} {...i} {...props}/>
                })
            }
        </section>
    );
};

export default NewsList;