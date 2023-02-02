import React from 'react';
import MySelect from "../../UI/MySelect";
import {useLimit, useSearch, useSelect} from "../../hook/form";
import Search from "../Search/Search";
import SelectFilter from "../SelectFilter/SelectFilter";

const NewsForm = props => {
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useLimit(props.setCurrentNewsDataLimit, props.currentNewsData.limit);

    return (
        <form>
            <Search setSearchInp={props.setSearchInp} searchInp={props.searchInp}/>
            <MySelect value={pressedSelectNewsCount} defaultValue={"enter news count"} selectChange={setPressedSelectNewsCount}
                      options={[
                          {value: '5', name: '5'},
                          {value: '10', name: '10'},
                          {value: '15', name: '15'},
                      ]}/>
            <SelectFilter filterNews={props.filterNews}/>
        </form>
    );
};

export default NewsForm;