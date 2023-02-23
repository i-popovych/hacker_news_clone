import React, {FC} from 'react';
import Search from "../Search/Search";
import SelectFilter from "../SelectFilter/SelectFilter";
import SelectLimit from "../SelectLimit/SelectLimit";
import {CurrentNewsData} from "../../redux/newsReducer";

interface Props {
    setSearchInp: (searchStr: string) => void
    searchInp: string
    currentNewsData: CurrentNewsData
    setCurrentNewsDataLimit: (limit: string) => void
    filterNews: (value: string) => void
}

const NewsForm: FC<Props> = (props) => {
    const {
        setSearchInp, searchInp, currentNewsData, setCurrentNewsDataLimit, filterNews
    } = props
    return (
        <form>
            <Search setSearchInp={setSearchInp} searchInp={searchInp}/>
            <SelectLimit limit={currentNewsData.limit} setLimit={setCurrentNewsDataLimit}/>
            <SelectFilter filterNews={filterNews}/>
        </form>
    );
};

export default NewsForm;