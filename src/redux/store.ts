import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import authReducer from "./authReducert";
import {composeWithDevTools } from 'redux-devtools-extension'
import profileReducer from "./profileReducer";

let rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer,
    profile: profileReducer
})

export type AppState =  ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U : never;
export type BaseThunk<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;

export default store;