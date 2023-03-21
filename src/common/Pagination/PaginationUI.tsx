import React, {FC} from 'react';
import cn from "classnames";
import s from "./Paginator.module.scss"
import {usePageCount} from "../../hooks/usePageCount";
import {Button} from "react-bootstrap";
import {Pagination} from '@mui/material';

interface Props {
    countItems: number
    currentPage: number
    onChangePage: (newNumber: string) => void
    limit: number
}

const PaginationUI: FC<Props> = ({countItems, currentPage, onChangePage, limit}) => {
    const pagesCount = usePageCount(countItems, limit);

    return (
        <Pagination count={pagesCount.length} page={currentPage} style={{marginLeft: "-15px", marginTop: "5px"}}
                    onChange={(e, page) => onChangePage(String(page))} sx={{
            "& .MuiPaginationItem-root": {
                color: "#d3d3d3",
            },
            "& .Mui-selected": {
                backgroundColor: "#42474e",
                "&:hover": {
                    backgroundColor: "#42474e"
                }
            },
        }}/>
        // <div>
        //     {
        //         pagesCount.map(i => <span key={i} onClick={() => onChangePage(i + '')}
        //             className={cn(s.item, {[s.active]: currentPage === i})}>{i}</span>)
        //     }
        // </div>
    );
};

export default PaginationUI;