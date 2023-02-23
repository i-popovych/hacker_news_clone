import {getPagesCount, setArrPage} from "../utils/utils";
import {useMemo} from "react";

export const usePageCount = (countItems: number, limit: number) => {
    return useMemo(() => {
        return setArrPage(getPagesCount(countItems, limit))
    }, [countItems, limit]);
}