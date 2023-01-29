import React from 'react';
import NewsItem from "./NewsItem";
import s from "./News.module.css"
import NotFound from "../NotFound";
import {compose} from "redux";
import {WithSendButton} from "../../hok/NewsItem";

const NewsList = ({newsList}) => {
    if(!newsList.length) return <NotFound/>
    return (
        <section className={s.newsList}>
            {
                newsList.map(i => {
                    let Temp = compose(WithSendButton)(NewsItem)
                    return <Temp key={i._id} {...i}/>
                })
            }
        </section>
    );
};

export default NewsList;