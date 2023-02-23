import React, { FC } from 'react';

interface Props {
    value: string
    selectChange: (str: string) => void
    defaultValue: string
    options: {value: string, name: string}[]
}

const MySelect: FC<Props> = ({value, selectChange, defaultValue, options}) => {
    return (
        <select
            //todo do normal e
            onChange={e => selectChange(e.target.value)}
            value={value}>
            <option value="" disabled={true}>{defaultValue}</option>
            {
                options.map(i => <option key={i.value} value={i.value}>{i.name}</option>)
            }
        </select>
    );
};

export default MySelect;