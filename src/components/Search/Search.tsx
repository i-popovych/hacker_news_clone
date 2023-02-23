import React, { FC } from 'react';

interface Props {
    searchInp: string
    setSearchInp: (searchStr: string) => void
    text?: string
}

const Search: FC<Props> = ({searchInp, setSearchInp, text = 'enter search input'}) => {
    return (
        <input type="text" value={searchInp} placeholder={text}
               onChange={e => setSearchInp(e.target.value)}/>
    );
};

export default Search;