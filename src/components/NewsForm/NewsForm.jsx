import React from 'react';
import MySelect from "../../UI/MySelect";
import {useLimit, useSearch, useSelect} from "../../hook/form";

const NewsForm = props => {
    const [pressedSelect, setPressedSelect] = useSelect(props.filterNews);
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useLimit(props.setCurrentNewsDataLimit, props.currentNewsData.limit);

    return (
        <form>
            <input type="text" value={props.searchInp} placeholder={"enter search input"}
                   onChange={e => props.setSearchInp(e.target.value)}/>
            <MySelect value={pressedSelectNewsCount} defaultValue={"enter news count"} selectChange={setPressedSelectNewsCount}
                      options={[
                          {value: '5', name: '5'},
                          {value: '10', name: '10'},
                          {value: '15', name: '15'},
                      ]}/>
            <MySelect value={pressedSelect} defaultValue={"enter whatever"} selectChange={setPressedSelect}
                      options={[
                          {value: '_id', name: 'filter by id'},
                          {value: 'title', name: 'filter by title'},
                      ]}/>
        </form>
    );
};

export default NewsForm;