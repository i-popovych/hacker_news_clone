import {useSelector} from "react-redux";
import {getSavedNews} from "../selectors/profile";
import {useMemo} from "react";

// export const useNewsList = () => {
//     return useMemo(() => {
//         return useSelector(state => getSavedNews(state, page, limit, searchInp));
//     }, [])
// }