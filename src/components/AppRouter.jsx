import React from 'react';
import {Route, Routes} from "react-router";
import {privateRoutes, publicRoutes} from "../utils/routes";
import {checkAuth} from "../selectors/auth";
import {useSelector} from "react-redux";

const AppRouter = () => {
    let isAuth = useSelector(checkAuth);
    return ( isAuth ?
            <Routes>
                {privateRoutes.map(i => {
                    return <Route key={i.path} path={i.path} element={i.element}/>
                })}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(i => {
                    return <Route key={i.path} path={i.path} element={i.element}/>
                })}
            </Routes>
    );
};

export default AppRouter;