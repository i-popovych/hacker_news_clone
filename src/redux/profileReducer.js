import profileAPI from "../api/profle";

const SAVED_NEWS = 'profileReducer/SAVED_NEWS'
const SAVED_NEWS_ID = 'profileReducer/SAVED_NEWS_ID'
const SET_LOADING_STATUS = 'profileReducer/SET_LOADING_STATUS'

const initialState = {
    savedNewsId: [],
    savedNews: null,
    isLoading: true
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVED_NEWS: return {...state, savedNews: [...action.newsArr]}
        case SAVED_NEWS_ID: return {...state, savedNewsId: [...state.savedNewsId, ...action.newsIdArr]}
        case SET_LOADING_STATUS: return {...state, isLoading: action.bool}

        default: return state;
    }
}

export const setSavedNews = newsArr => ({type: SAVED_NEWS, newsArr});
export const setSavedIdNews = newsIdArr => ({type: SAVED_NEWS_ID, newsIdArr});
export const setLoadingStatus = bool => ({type: SET_LOADING_STATUS, bool})

export const addNews = id => async dispatch => {
    try {
        dispatch(setLoadingStatus(true));
        const res = await profileAPI.addNews(id);
        if(res.status === 200) dispatch(setSavedIdNews([id]))
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