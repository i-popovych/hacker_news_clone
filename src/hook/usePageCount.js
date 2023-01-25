import {getPagesCount, setArrPage} from "../utils/utils";
import {useMemo} from "react";

export const usePageCount = (countItems, limit) => {
        return useMemo(() =>  {
            return setArrPage(getPagesCount(countItems, limit))
        }, [countItems, limit]);
}