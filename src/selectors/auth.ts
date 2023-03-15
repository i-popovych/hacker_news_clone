import {AppState} from "../redux/store";
import {IUserAuth} from "../model/user";

export const checkAuth = (state: AppState) => {
    return state.auth.isAuth
}

export const checkInitialize = (state: AppState) => state.auth.isInitial

export const getUserName = (state: AppState) => state.auth.currentUser?.username
export const getCurrentUser = (state: AppState) => state.auth.currentUser