import React from 'react';
import {Route, Routes} from "react-router";
import {privateRoutes} from "../utils/routes";

const AppRouter = () => {
    return (
            <Routes>
                {privateRoutes.map(i => {
                    return <Route key={i.path} path={i.path} element={i.element}/>
                })}
            </Routes>
    );
};

export default AppRouter;