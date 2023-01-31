import {NewsAPI} from "../api/news";

const SET_NEWS = './newsReducer/SET_NEWS'
const FILTER_NEWS = './newsReducer/FILTER_NEWS'
const SEARCH_NEWS = './newsReducer/SEARCH_NEWS'
const SET_SEARCHING_STATUS = './newsReducer/SET_SEARCHING_STATUS'
const SET_lOAD_STATUS = './newsReducer/SET_lOAD_STATUS'
const SET_TOTAL_COUNT = './newsReducer/SET_TOTAL_COUNT'
const SET_CURRENT_NEWS_DATA_PAGE = './newsReducer/SET_CURRENT_NEWS_DATA_PAGE'
const SET_CURRENT_NEWS_DATA_LIMIT = './newsReducer/SET_CURRENT_NEWS_DATA_LIMIT'


const initialState = {
    newsArr: [],
    searchNewsArr: [],
    isSearching: false,
    isLoading: true,
    totalCount: null,
    currentNewsData: {
        page: 1,
        limit: 5
    }
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: return {...state, newsArr: action.data}
        case FILTER_NEWS: {
            return {
                ...state,
                newsArr: [...state.newsArr].sort((a, b) => a[action.value].localeCompare(b[action.value]))
            }
        }

        case SEARCH_NEWS: {
            return {
                ...state,
                searchNewsArr: [...state.newsArr].filter(i => i.title.includes(action.value))
            }
        }
        case SET_SEARCHING_STATUS: return {...state, isSearching: action.bool}
        case SET_lOAD_STATUS: return {...state, isLoading: action.bool}
        case SET_TOTAL_COUNT: return {...state, totalCount: action.num}

        case SET_CURRENT_NEWS_DATA_PAGE: {
            return {
                ...state,
                currentNewsData: {...state.currentNewsData, page: action.page}
            }
        }
        case SET_CURRENT_NEWS_DATA_LIMIT: {
            return {
                ...state,
                currentNewsData: {...state.currentNewsData, limit: action.limit}
            }
        }
        default: return state;
    }
}

export const setNews = (data) => ({type: SET_NEWS, data});
export const filterNews = (value) => ({type: FILTER_NEWS, value});
export const searchNews = (value) => ({type: SEARCH_NEWS, value});
export const setSearchingStatus = (bool) => ({type: SET_SEARCHING_STATUS, bool});
export const setLoadStatus = (bool) => ({type: SET_lOAD_STATUS, bool});
export const setTotalCount = (num) => ({type: SET_TOTAL_COUNT, num});
export const setCurrentNewsDataPage = (page) => ({type: SET_CURRENT_NEWS_DATA_PAGE, page});
export const setCurrentNewsDataLimit = (limit) => ({type: SET_CURRENT_NEWS_DATA_LIMIT, limit});


export const fetchNews = (page, limit) => async (dispatch) => {
    dispatch(setLoadStatus(true));
    const res = await NewsAPI.getNews(page, limit);
    dispatch(setNews(res.items));
    dispatch(setTotalCount(res.totalCount));
    dispatch(setLoadStatus(false));
}

export default newsReducer