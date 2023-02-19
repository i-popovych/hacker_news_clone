import authAPI, {UserAuthData} from "../api/auth";
import {InferActionsTypes} from "./store";

enum AuthTypes {
    SET_CURRENT_USER = 'authReducer/SET_CURRENT_USER',
    DELETE_CURRENT_USER = 'authReducer/DELETE_CURRENT_USER',
    INITIALIZE_APP = 'authReducer/INITIALIZE_APP',
    SET_AUTH_STATUS = 'authReducer/SET_AUTH_STATUS',
}

const initialState = {
    //todo: add here null
    currentUser: {} as UserAuthData | {},
    isAuth: true,
    isInitial: false
}

type InitialState = typeof initialState

const authReducer = (state = initialState, action: Actions): InitialState => {
    switch (action.type) {
        case AuthTypes.SET_CURRENT_USER: return {...state, currentUser: action.data}
        case AuthTypes.DELETE_CURRENT_USER: return {...state, currentUser: {}}
        case AuthTypes.SET_AUTH_STATUS: return {...state, isAuth: action.bool}
        case AuthTypes.INITIALIZE_APP: return {...state, isInitial: true}
        default:
            return state
    }
}

export const authActions = {
    setCurrentUser: (data: any) => ({type: AuthTypes.SET_CURRENT_USER, data} as const),
    deleteCurrentUser: () => ({type: AuthTypes.DELETE_CURRENT_USER} as const),
    setAuthStatus: (bool: boolean) => ({type: AuthTypes.SET_AUTH_STATUS, bool} as const),
    initializeApp: () => ({type: AuthTypes.INITIALIZE_APP} as const)
}

export const authThunk = {
    checkAuth: () => async (dispatch: any) => {
        // const {auth} = useActions();
        try {
            const data = await authAPI.getAuthStatus();
            dispatch(authActions.initializeApp())
            dispatch(authActions.setCurrentUser(data.user))
            dispatch(authActions.setAuthStatus(true))
        } catch (e) {
            authActions.setAuthStatus(false)
        }
    },
    login: (username: string, password: string) => async (dispatch: any) => {
        try {
            const data = await authAPI.login(username, password)
            dispatch(authActions.setAuthStatus(true))
            dispatch(authActions.setCurrentUser(data))
            localStorage.setItem('token', data.token);
        } catch (e) {
            console.log(e)
        }
    },

    registration: (username: string, password: string) => async (dispatch: any) => {
        const res = await authAPI.registration(username, password)
    },

    logout: () => async (dispatch: any) => {
        //todo тут дублювання коду в запитах
        // const {auth} = useActions();
        localStorage.removeItem('token');
        dispatch(authActions.deleteCurrentUser());
        dispatch(authActions.setAuthStatus(false));
    }

}

type Actions = InferActionsTypes<typeof authActions>

export default authReducer;