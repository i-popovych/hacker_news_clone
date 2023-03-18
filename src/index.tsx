import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store"
import {unmountComponentAtNode} from "react-dom";


const root: any = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

unmountComponentAtNode(root);
