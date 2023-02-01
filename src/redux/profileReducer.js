import profileAPI from "../api/profle";
import {filterWithoutId, savedNewsWithoutId} from "../utils/reducers";

const SAVED_NEWS = 'profileReducer/SAVED_NEWS'
const SAVED_NEWS_ID = 'profileReducer/SAVED_NEWS_ID'
const SET_LOADING_STATUS = 'profileReducer/SET_LOADING_STATUS'
const DELETE_SAVED_NEWS = 'profileReducer/DELETE_SAVED_NEWS'
const DELETE_SAVED_NEWS_ID = 'profileReducer/DELETE_SAVED_NEWS_ID'
const ADD_SAVED_NEWS = 'profileReducer/ADD_SAVED_NEWS'

const initialState = {
    savedNewsId: [],
    savedNews: [],
    isLoading: true
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVED_NEWS: return {...state, savedNews: [...action.newsArr]}
        case ADD_SAVED_NEWS: return {...state, savedNews: [...state.savedNews, action.news]}
        case SAVED_NEWS_ID: return {...state, savedNewsId: [...state.savedNewsId, ...action.newsIdArr]}
        case DELETE_SAVED_NEWS: return {...state, savedNews: savedNewsWithoutId(state.savedNews, action.newsId)}
        case DELETE_SAVED_NEWS_ID: return {...state, savedNewsId: filterWithoutId(state.savedNewsId, action.newsId)}
        case SET_LOADING_STATUS: return {...state, isLoading: action.bool}

        default: return state;
    }
}

export const setSavedNews = newsArr => ({type: SAVED_NEWS, newsArr});
export const setSavedIdNews = newsIdArr => ({type: SAVED_NEWS_ID, newsIdArr});
export const setLoadingStatus = bool => ({type: SET_LOADING_STATUS, bool})
export const deleteSavedNews = newsId => ({type: DELETE_SAVED_NEWS, newsId})
export const deleteSavedNewsId = newsId => ({type: DELETE_SAVED_NEWS_ID, newsId})
export const addSavedNews = news => ({type: ADD_SAVED_NEWS, news})

export const addNews = id => async dispatch => {
    try {
        dispatch(setLoadingStatus(true));
        const res = await profileAPI.addNews(id);
        if(res.status === 200) {
            dispatch(setSavedIdNews([id]))
            dispatch(addSavedNews(res.data.news))
        }
        dispatch(setLoadingStatus(false))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const deleteNews = id => async dispatch => {
    try {
        const res = await profileAPI.deleteNews(id);
        if(res.status === 200) {
            dispatch(deleteSavedNews(id));
            dispatch(deleteSavedNewsId(id))
        }
    } catch (e) {
        console.log(e)
    }
}


export const fetchSavedNews = () => async dispatch => {
    try {
        dispatch(setLoadingStatus(true))
        const res = await profileAPI.getSavedNews();
        if(res.data.length) {
            let savedNewsId = [];
            for(let i of res.data) {
                savedNewsId.push(i._id)
            }
            dispatch(setSavedIdNews(savedNewsId))
        }
        dispatch(setSavedNews(res.data));
        dispatch(setLoadingStatus(false))
    } catch (e) {
        console.log(e);
    }
}
export default profileReducer