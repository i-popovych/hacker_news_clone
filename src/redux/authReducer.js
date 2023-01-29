import authAPI from "../api/auth";
import profileAPI from "../api/profle";

const SET_CURRENT_USER = 'authReducer/SET_CURRENT_USER';
const DELETE_CURRENT_USER = 'authReducer/DELETE_CURRENT_USER';
const INITIALIZE_APP = 'authReducer/INITIALIZE_APP';
const SET_AUTH_STATUS = 'authReducer/SET_AUTH_STATUS';

const initialState = {
    currentUser: {},
    isAuth: true,
    isInitial: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: return {...state, currentUser: action.data}
        case DELETE_CURRENT_USER: return {...state, currentUser: {}}
        case SET_AUTH_STATUS: return {...state, isAuth: action.bool}
        case INITIALIZE_APP: return {...state, isInitial: true}
        default: return state
    }
}

export const setCurrentUser = (data) => ({type: SET_CURRENT_USER, data})
export const deleteCurrentUser = () => ({type: DELETE_CURRENT_USER})
export const setAuthStatus = bool => ({type: SET_AUTH_STATUS, bool})
export const initializeApp = () => ({type: INITIALIZE_APP})

export const checkAuth = () => async dispatch => {
    const res = await authAPI.getAuthStatus();
    dispatch(initializeApp());
    dispatch(setAuthStatus(res));
}

export const login = (username, password) => async dispatch => {
    const res = await authAPI.login(username, password)
    if(res.request.status === 200) {
        dispatch(setAuthStatus(true));
        dispatch(setCurrentUser(res.data.user));
        localStorage.setItem('token', res.data.token);
    }
}

export const registration = (username, password) => async dispatch => {
    const res = await authAPI.registration(username, password)
}

export const logout = () => async dispatch => {
    localStorage.removeItem('token');
    dispatch(deleteCurrentUser());
    dispatch(setAuthStatus(false));
}




export default authReducer;