import React, {FC, useMemo} from 'react';
import s from "./News.module.scss"
import NoFound from "../NoFound";
import {INews} from '../../models/INews';

interface Props {
    newsList: INews[]
    ChildrenItem: React.ElementType
}

const NewsList: FC<Props> = ({newsList, ChildrenItem,  ...props}) => {
    const news = useMemo(() => {
        return newsList.filter(Boolean)
    }, [newsList])
    if(!news.length) return <NoFound/>

    return (
        <section className={s.newsList}>
            {
                news.map(i => {
                    return <ChildrenItem key={i.id} {...i} {...props}/>
                })
            }
        </section>
    );
};

export default NewsList;