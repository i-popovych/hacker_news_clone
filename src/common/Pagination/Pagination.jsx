import React, {useMemo} from 'react';
import cn from "classnames";
import s from "./Paginator.module.css"
import {getPagesCount, setArrPage} from "../../utils/utils";
import {usePageCount} from "../../hooks/usePageCount";

const Pagination = ({countItems, currentPage, onChangePage, limit}) => {
    const pagesCount = usePageCount(countItems, limit);

    return (
        <div>
            {
                pagesCount.map(i => <span key={i} onClick={() => onChangePage(i)}
                    className={cn(s.item, {[s.active]: currentPage === i})}>{i}</span>)
            }
        </div>
    );
};

export default Pagination;