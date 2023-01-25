import React from 'react';

const MySelect = ({value, selectChange, defaultValue, options}) => {
    return (
        <select
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