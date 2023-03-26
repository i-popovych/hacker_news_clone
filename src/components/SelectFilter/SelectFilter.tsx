import React, { FC } from 'react';
import MySelect from "../../UI/MySelect";
import {useSelect} from "../../hooks/form";

const SelectFilter: FC<{filterNews: (value: string) => void}> = ({filterNews}) => {
    const [pressedSelect, setPressedSelect] = useSelect(filterNews);
    return (
        <MySelect value={pressedSelect} description={"enter whatever"} selectChange={setPressedSelect}
                  options={[
                      {value: 'index', name: 'filter by index'},
                      {value: 'score', name: 'filter by scope'},
                      {value: 'title', name: 'filter by title'},
                  ]}/>
    );
};

export default SelectFilter;