import {useEffect, useState} from "react";

export const useSelect = (callback) => {
    const [pressedSelect, setPressedSelect] = useState("");
    useEffect(() => {
        if(pressedSelect) callback(pressedSelect)
    }, [pressedSelect]);
    return [pressedSelect, setPressedSelect];
}