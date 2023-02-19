import React from 'react';
import MySelect from "../../UI/MySelect";
import {useLimit, useSearch, useSelect} from "../../hooks/form";
import Search from "../Search/Search";
import SelectFilter from "../SelectFilter/SelectFilter";
import SelectLimit from "../SelectLimit/SelectLimit";

const NewsForm = props => {

    return (
        <form>
            <Search setSearchInp={props.setSearchInp} searchInp={props.searchInp}/>
            <SelectLimit limit={props.currentNewsData.limit} setLimit={props.setCurrentNewsDataLimit}/>
            <SelectFilter filterNews={props.filterNews}/>
        </form>
    );
};

export default NewsForm;