import React, { FC } from 'react';
import MySelect from "../../UI/MySelect";
import {useLimit} from "../../hooks/form";

interface Props {
    limit: number
    setLimit: (value: string) => void
}

const SelectLimit: FC<Props> = ({setLimit, limit}) => {
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useLimit(setLimit, String(limit));
    return (
        <MySelect value={String(pressedSelectNewsCount)} selectChange={setPressedSelectNewsCount}
                  description={"enter news count"}
                  options={[
                      {value: '5', name: '5'},
                      {value: '10', name: '10'},
                      {value: '15', name: '15'},
                  ]}/>
    );
};

export default SelectLimit;