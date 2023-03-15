import React, { FC } from 'react';
import {Search} from "react-bootstrap-icons";
import s from './search.module.scss'

interface Props {
    searchInp: string
    setSearchInp: (searchStr: string) => void
    text?: string
}

const SearchForm: FC<Props> = ({searchInp, setSearchInp, text = 'enter search input'}) => {
    return (
        <div className={s.search}>
            <Search/>
            <input type="text" value={searchInp} placeholder={text}
                   onChange={e => setSearchInp(e.target.value)}/>
        </div>
    );
};

export default SearchForm;