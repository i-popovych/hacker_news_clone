import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import thunkMiddleware from "redux-thunk"
import authReducer from "./authReducer";
import {composeWithDevTools } from 'redux-devtools-extension'
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    news: newsReducer,
    auth: authReducer,
    profile: profileReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;