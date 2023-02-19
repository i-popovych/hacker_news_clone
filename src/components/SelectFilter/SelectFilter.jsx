import React from 'react';
import MySelect from "../../UI/MySelect";
import {useSelect} from "../../hooks/form";

const SelectFilter = ({filterNews}) => {
    const [pressedSelect, setPressedSelect] = useSelect(filterNews);
    return (
        <MySelect value={pressedSelect} defaultValue={"enter whatever"} selectChange={setPressedSelect}
                  options={[
                      {value: '_id', name: 'filter by id'},
                      {value: 'title', name: 'filter by title'},
                  ]}/>
    );
};

export default SelectFilter;