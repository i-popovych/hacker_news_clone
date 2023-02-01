import {useEffect, useState} from "react";

export const useClickLoading = (findArrData, findItem, onChangeData,) => {
    const [isDataChanging, setIsDataChanging] = useState(false);

    useEffect(() => {
        if(findArrData.includes(findItem)) setIsDataChanging(false)
    }, [onChangeData])

    return [isDataChanging, setIsDataChanging]
}