import React from 'react';
import NewsItem from "./NewsItem";
import s from "./News.module.css"
import NotFound from "../NotFound";

const NewsList = ({newsList}) => {
    if(!newsList.length) return <NotFound/>
    return (
        <section className={s.newsList}>
            {
                newsList.map(i => {
                    return <NewsItem key={i._id} {...i}/>
                })
            }
        </section>
    );
};

export default NewsList;