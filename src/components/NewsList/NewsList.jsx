import React from 'react';
import s from "./News.module.css"
import NotFound from "../NotFound";
import NewsProfileItem from "./NewsProfileItem";
import NewsItem from "./NewsItem";

const NewsList = ({newsList, ...props}) => {
    if(!newsList.length) return <NotFound/>
    let site = window.location.href.split('/').at(-1)
    let Item = site === 'profile' ? NewsProfileItem : NewsItem

    return (
        <section className={s.newsList}>
            {
                newsList.map(i => {
                    return <Item key={i._id} {...i} {...props}/>
                })
            }
        </section>
    );
};

export default NewsList;