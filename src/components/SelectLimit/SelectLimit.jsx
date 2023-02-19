import React from 'react';
import MySelect from "../../UI/MySelect";
import {useLimit} from "../../hooks/form";

const SelectLimit = ({setLimit, limit}) => {
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useLimit(setLimit, limit);
    return (
        <MySelect value={pressedSelectNewsCount} defaultValue={"enter news count"} selectChange={setPressedSelectNewsCount}
                  options={[
                      {value: '5', name: '5'},
                      {value: '10', name: '10'},
                      {value: '15', name: '15'},
                  ]}/>
    );
};

export default SelectLimit;