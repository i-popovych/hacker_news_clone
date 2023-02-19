import React from 'react';
import Search from "../Search/Search";
import SelectLimit from "../SelectLimit/SelectLimit";
import SelectFilter from "../SelectFilter/SelectFilter";

const SavedNewsForm = ({setSearchInp, searchInp, limit, setLimit, setFilter}) => {
    return (
        <>
            <Search setSearchInp={setSearchInp} searchInp={searchInp}/>
            {!searchInp && <SelectLimit limit={limit} setLimit={setLimit}/>}
            <SelectFilter filterNews={setFilter}/>
        </>
    );
};

export default SavedNewsForm;