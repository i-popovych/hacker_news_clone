import authAPI from "../api/auth";
import {AppState, BaseThunk, InferActionsTypes} from "./store";
import {Dispatch} from "redux";
import {IUserAuth} from "../models/user";

enum AuthTypes {
    SET_CURRENT_USER = 'authReducer/SET_CURRENT_USER',
    DELETE_CURRENT_USER = 'authReducer/DELETE_CURRENT_USER',
    INITIALIZE_APP = 'authReducer/INITIALIZE_APP',
    SET_AUTH_STATUS = 'authReducer/SET_AUTH_STATUS',
}

const initialState = {
    currentUser: null as IUserAuth | null,
    isAuth: false,
    isInitial: false
}

type InitialState = typeof initialState

const authReducer = (state = initialState, action: AuthActions): InitialState => {
    switch (action.type) {
        case AuthTypes.SET_CURRENT_USER: return {...state, currentUser: action.data}
        case AuthTypes.DELETE_CURRENT_USER: return {...state, currentUser: null}
        case AuthTypes.SET_AUTH_STATUS: return {...state, isAuth: action.bool}
        case AuthTypes.INITIALIZE_APP: return {...state, isInitial: true}
        default:
            return state
    }
}

export const authActions = {
    setCurrentUser: (data: IUserAuth) => ({type: AuthTypes.SET_CURRENT_USER, data} as const),
    deleteCurrentUser: () => ({type: AuthTypes.DELETE_CURRENT_USER} as const),
    setAuthStatus: (bool: boolean) => ({type: AuthTypes.SET_AUTH_STATUS, bool} as const),
    initializeApp: () => ({type: AuthTypes.INITIALIZE_APP} as const)
}

export const authThunk = {
    //for example how to typing dispatch
    checkAuth: () => async (dispatch: Dispatch<AuthActions>, getState: MyGetState) => {
        try {
            const data = await authAPI.getAuthStatus();
            dispatch(authActions.initializeApp())
            dispatch(authActions.setCurrentUser(data.user))
            dispatch(authActions.setAuthStatus(true))
        } catch (e) {
            authActions.setAuthStatus(false)
        }
    },
    login: (username: string, password: string): Thunk => async (dispatch, getState) => {
            const data = await authAPI.login(username, password)
            dispatch(authActions.setAuthStatus(true))
            dispatch(authActions.setCurrentUser(data.user))
            localStorage.setItem('token', data.token);
    },

    registration: (username: string, password: string): Thunk => async (dispatch) => {
        const res = await authAPI.registration(username, password)
    },

    logout: (): Thunk => async (dispatch) => {
        localStorage.removeItem('token');
        dispatch(authActions.deleteCurrentUser());
        dispatch(authActions.setAuthStatus(false));
    }

}

export type AuthActions = InferActionsTypes<typeof authActions>
type Thunk = BaseThunk<AuthActions>
type MyGetState = () => AppState

export default authReducer;