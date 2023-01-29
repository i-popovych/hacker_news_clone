import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import thunkMiddleware from "redux-thunk"
import authReducer from "./authReducer";
import {composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
    news: newsReducer,
    auth: authReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;