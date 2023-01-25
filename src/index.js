import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>  i have done it to react component don't rerender twice, i've disabled dev mod
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);

// store.subscribe(() => reRender(store.getState()));