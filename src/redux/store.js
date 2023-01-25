import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    news: newsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;