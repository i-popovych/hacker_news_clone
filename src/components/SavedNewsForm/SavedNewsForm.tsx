import React, { FC } from 'react';
import Search from "../Search/Search";
import SelectLimit from "../SelectLimit/SelectLimit";
import SelectFilter from "../SelectFilter/SelectFilter";

interface Props {
    setSearchInp: (value: string) => void
    searchInp: string
    limit: number
    setLimit: (value: string) => void
    setFilter: (value: string) => void

}

const SavedNewsForm: FC<Props> = ({setSearchInp, searchInp, limit, setLimit, setFilter}) => {
    return (
        <>
            <Search setSearchInp={setSearchInp} searchInp={searchInp}/>
            {!searchInp && <SelectLimit limit={limit} setLimit={setLimit}/>}
            <SelectFilter filterNews={setFilter}/>
        </>
    );
};

export default SavedNewsForm;