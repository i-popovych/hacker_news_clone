import React, {FC} from 'react';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

interface Props {
    value: string
    selectChange: (str: string) => void
    description: string
    options: { value: string, name: string }[]
}


const MySelect: FC<Props> = ({value, selectChange, description, options}) => {
    return (
        <FormControl fullWidth sx={{minWidth: 100}}>
            <InputLabel sx={{color: '#f8f8f8'}} variant="standard" htmlFor="uncontrolled-native">
                {description}
            </InputLabel>
            <NativeSelect
                sx={{
                    color: '#1b1b1b', // text color
                    bgcolor: '#f5f5f5', // background color
                    '& fieldset': {
                        borderColor: 'red', // border color
                    },
                    '&:hover fieldset': {
                        borderColor: 'blue', // border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'green', // border color on focus
                    }
                }}
                defaultValue={value}
                inputProps={{
                    name: description,
                    id: 'uncontrolled-native',
                }}
                onChange={e => selectChange(e.target.value)}
            >
                {
                    options.map(i => <option key={i.value} value={i.value}>{i.name}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
};

export default MySelect;