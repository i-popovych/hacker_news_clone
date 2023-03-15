import {useEffect, useState} from "react";

export const useClickLoading = (findArrData: string[], findItem: string, onChangeData: string[], bool = false) => {
    const [isDataChanging, setIsDataChanging] = useState(false);

    useEffect(() => {
        if(findArrData.includes(findItem)) setIsDataChanging(bool)
    }, [onChangeData])

    return [isDataChanging, setIsDataChanging] as const;
}