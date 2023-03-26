import NewsAPI from "../api/news";
import {INews} from "../model/INews";
import {BaseThunk, InferActionsTypes} from "./store";
import {filterNews} from "../utils/news";

enum ProfileTypes {
    SET_NEWS = './newsReducer/SET_NEWS',
    FILTER_NEWS = './newsReducer/FILTER_NEWS',
    SEARCH_NEWS = './newsReducer/SEARCH_NEWS',
    SET_SEARCHING_STATUS = './newsReducer/SET_SEARCHING_STATUS',
    SET_lOAD_STATUS = './newsReducer/SET_lOAD_STATUS',
    SET_TOTAL_COUNT = './newsReducer/SET_TOTAL_COUNT',
    SET_CURRENT_NEWS_DATA_PAGE = './newsReducer/SET_CURRENT_NEWS_DATA_PAGE',
    SET_CURRENT_NEWS_DATA_LIMIT = './newsReducer/SET_CURRENT_NEWS_DATA_LIMIT',
}

export interface CurrentNewsData {
    page: number
    limit: number
}

const initialState = {
    newsArr: [] as INews[],
    searchNewsArr: [] as INews[],
    isSearching: false,
    isLoading: true,
    totalCount: 0,
    currentNewsData: {
        page: 1,
        limit: 10
    } as CurrentNewsData
}

type InitialState = typeof initialState

const newsReducer = (state = initialState, action: NewsActions): InitialState => {
    switch (action.type) {
        case ProfileTypes.SET_NEWS: {
            return {...state, newsArr: action.data}
        }
        case ProfileTypes.FILTER_NEWS:
            return {...state, newsArr: filterNews(action.value, [...state.newsArr])}


        case ProfileTypes.SEARCH_NEWS: {
            return {
                ...state,
                searchNewsArr:
                    [...state.newsArr].filter((i: INews) => i.title.toLowerCase().includes(action.value.toLowerCase()))
            }
        }
        case ProfileTypes.SET_SEARCHING_STATUS:
            return {...state, isSearching: action.bool}
        case ProfileTypes.SET_lOAD_STATUS:
            return {...state, isLoading: action.bool}
        case ProfileTypes.SET_TOTAL_COUNT:
            return {...state, totalCount: action.num}

        case ProfileTypes.SET_CURRENT_NEWS_DATA_PAGE: {
            return {
                ...state,
                currentNewsData: {...state.currentNewsData, page: Number(action.page)}
            }
        }
        case ProfileTypes.SET_CURRENT_NEWS_DATA_LIMIT: {
            return {
                ...state,
                currentNewsData: {...state.currentNewsData, limit: Number(action.limit)}
            }
        }
        default:
            return state;
    }
}

export const newsActions = {
    setNews: (data: INews[]) => ({type: ProfileTypes.SET_NEWS, data} as const),
    filterNews: (value: string) => ({type: ProfileTypes.FILTER_NEWS, value} as const),
    searchNews: (value: string) => ({type: ProfileTypes.SEARCH_NEWS, value} as const),
    setSearchingStatus: (bool: boolean) => ({type: ProfileTypes.SET_SEARCHING_STATUS, bool} as const),
    setLoadStatus: (bool: boolean) => ({type: ProfileTypes.SET_lOAD_STATUS, bool} as const),
    setTotalCount: (num: number) => ({type: ProfileTypes.SET_TOTAL_COUNT, num} as const),
    setCurrentNewsDataPage: (page: string) => ({type: ProfileTypes.SET_CURRENT_NEWS_DATA_PAGE, page} as const),
    setCurrentNewsDataLimit: (limit: string) => ({type: ProfileTypes.SET_CURRENT_NEWS_DATA_LIMIT, limit} as const),
}

export const newsThunk = {
    fetchNews: (page: number, limit: number, type: 'topstories' | 'newstories' = 'topstories'): Thunk => async (dispatch) => {
        dispatch(newsActions.setLoadStatus(true));
        const data = await NewsAPI.getNews(page, limit, type);
        dispatch(newsActions.setNews(data.items));
        dispatch(newsActions.setTotalCount(data.totalCount));
        dispatch(newsActions.setLoadStatus(false));
    }
}

export type NewsActions = InferActionsTypes<typeof newsActions>
type Thunk = BaseThunk<NewsActions>

export default newsReducer