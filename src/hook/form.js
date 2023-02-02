import {useEffect, useState} from "react";

export const useSelect = (callback) => {
    const [pressedSelect, setPressedSelect] = useState("");
    useEffect(() => {
        if(pressedSelect) callback(pressedSelect)
    }, [pressedSelect]);
    return [pressedSelect, setPressedSelect];
}

export const useSearch = (callback) => {
    const [searchInp, setSearchInp] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(searchInp) {
            setLoading(true);
            callback ? callback(searchInp) : setSearchInp(searchInp);
        } else setLoading(false)
    }, [searchInp])
    return [searchInp, setSearchInp, loading];
}

export const useLimit = (callback, currentLimit = 5) => {
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useState(currentLimit);
    useEffect(() => {
        callback(pressedSelectNewsCount)
    }, [pressedSelectNewsCount])
    return [pressedSelectNewsCount, setPressedSelectNewsCount];
}