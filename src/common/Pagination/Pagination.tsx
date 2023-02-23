import React, {FC} from 'react';
import cn from "classnames";
import s from "./Paginator.module.css"
import {usePageCount} from "../../hooks/usePageCount";

interface Props {
    countItems: number
    currentPage: number
    onChangePage: (newNumber: string) => void
    limit: number
}

const Pagination: FC<Props> = ({countItems, currentPage, onChangePage, limit}) => {
    const pagesCount = usePageCount(countItems, limit);

    return (
        <div>
            {
                pagesCount.map(i => <span key={i} onClick={() => onChangePage(i + '')}
                    className={cn(s.item, {[s.active]: currentPage === i})}>{i}</span>)
            }
        </div>
    );
};

export default Pagination;