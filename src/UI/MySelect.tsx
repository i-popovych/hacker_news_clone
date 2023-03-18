import React, {FC, useState} from 'react';
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
    // <FormControl variant="standard" sx={{m: 0, minWidth: 200, borderColor: 'white'}}>
    //     <InputLabel sx={{color: 'red'}} id="demo-simple-select-standard-label">{description}</InputLabel>
    //     <Select
    //         sx={{
    //             color: 'red', // text color
    //             bgcolor: 'white', // background color
    //             '& fieldset': {
    //                 borderColor: 'red', // border color
    //             },
    //             '&:hover fieldset': {
    //                 borderColor: 'blue', // border color on hover
    //             },
    //             '&.Mui-focused fieldset': {
    //                 borderColor: 'green', // border color on focus
    //             },
    //         }}
    //         labelId="demo-simple-select-standard-label"
    //         id="demo-simple-select-standard"
    //         value={currentValue}
    //         onChange={e => {
    //             selectChange(e.target.value)
    //         }}
    //     >
    //         <MenuItem value="" disabled>
    //             <em>{description}</em>
    //         </MenuItem>
    //         {
    //             options.map(i => <MenuItem key={i.value} value={i.value}>{i.name}</MenuItem>)
    //         }
    //     </Select>
    // </FormControl>
    // <Select sx={{
    //     width: 100,
    //     height: 35
    // }}
    //     //todo do normal e
    //     onChange={e => selectChange(e.target.value)}
    //     value={value}>
    //     <MenuItem value="" disabled={true}>{description}</MenuItem>
    //     {
    //         options.map(i => <option key={i.value} value={i.value}>{i.name}</option>)
    //     }
    // </Select>
};

export default MySelect;