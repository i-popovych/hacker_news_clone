import {useEffect, useState} from "react";

export const useSelect = (callback: (value: string) => void) => {
    const [pressedSelect, setPressedSelect] = useState("");
    useEffect(() => {
        if(pressedSelect) callback(pressedSelect)
    }, [pressedSelect]);
    return [pressedSelect, setPressedSelect] as const;
}

export const useSearch = (callback: ((value: string) => void) | null) => {
    const [searchInp, setSearchInp] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(searchInp) {
            setLoading(true);
            callback ? callback(searchInp) : setSearchInp(searchInp);
        } else setLoading(false)
    }, [searchInp])
    return [searchInp, setSearchInp, loading] as const;
}

export const useLimit = (callback: (value: string) => void, currentLimit = '5') => {
    const [pressedSelectNewsCount, setPressedSelectNewsCount] = useState(currentLimit);
    useEffect(() => {
        callback(pressedSelectNewsCount)
    }, [pressedSelectNewsCount])
    return [pressedSelectNewsCount, setPressedSelectNewsCount] as const;
}