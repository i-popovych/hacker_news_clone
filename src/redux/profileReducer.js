import profileAPI from "../api/profle";
import {filterWithoutId} from "../utils/reducers";

const SAVED_NEWS = 'profileReducer/SAVED_NEWS'
const SAVED_NEWS_ID = 'profileReducer/SAVED_NEWS_ID'
const SET_LOADING_STATUS = 'profileReducer/SET_LOADING_STATUS'
const ADD_LOADING_NEWS_ID = 'profileReducer/ADD_LOADING_NEWS_ID'
const DELETE_LOADING_NEWS_ID = 'profileReducer/DELETE_LOADING_NEWS_ID'

const initialState = {
    savedNewsId: [],
    loadingSavedNewsId: [],
    savedNews: null,
    isLoading: true
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVED_NEWS: return {...state, savedNews: [...action.newsArr]}
        case SAVED_NEWS_ID: return {...state, savedNewsId: [...state.savedNewsId, ...action.newsIdArr]}
        case ADD_LOADING_NEWS_ID: return {...state, loadingSavedNewsId: [...state.loadingSavedNewsId, action.newsId]}
        case DELETE_LOADING_NEWS_ID:
            return {...state, loadingSavedNewsId: filterWithoutId(state.loadingSavedNewsId, action.newsId)}
        case SET_LOADING_STATUS: return {...state, isLoading: action.bool}

        default: return state;
    }
}

export const setSavedNews = newsArr => ({type: SAVED_NEWS, newsArr});
export const setSavedIdNews = newsIdArr => ({type: SAVED_NEWS_ID, newsIdArr});
export const setLoadingStatus = bool => ({type: SET_LOADING_STATUS, bool})
export const addLoadingNews = newsId => ({type: ADD_LOADING_NEWS_ID, newsId})
export const deleteLoadingNews = newsId => ({type: DELETE_LOADING_NEWS_ID, newsId})

export const addNews = id => async dispatch => {
    try {
        dispatch(setLoadingStatus(true));
        dispatch(addLoadingNews(id));
        const res = await profileAPI.addNews(id);
        if(res.status === 200) dispatch(setSavedIdNews([id]))
        dispatch(deleteLoadingNews(id))
        dispatch(setLoadingStatus(false))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const deleteNews = id => async dispatch => {
    try {
        dispatch(setLoadingStatus(true));
        const res = await profileAPI.deleteNews(id);
        dispatch(fetchSavedNews());
        dispatch(setLoadingStatus(false))
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