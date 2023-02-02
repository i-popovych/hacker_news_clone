import React from 'react';

const Search = ({searchInp, setSearchInp, text = 'enter search input'}) => {
    return (
        <input type="text" value={searchInp} placeholder={text}
               onChange={e => setSearchInp(e.target.value)}/>
    );
};

export default Search;