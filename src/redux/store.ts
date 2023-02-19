import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import thunkMiddleware from "redux-thunk"
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

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;

export default store;