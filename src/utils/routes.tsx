import {Navigate} from "react-router";
import News from "../pages/NewsContainer";

import Past from "../pages/Past";
import Error from "../pages/Error";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Profile from "../pages/Profile";
import React from "react";

interface IRoute {
    path: string
    element: JSX.Element
}

export const privateRoutes: IRoute[] = [
    {path: '/past',  element: <Past/>},
    {path: '/news',  element: <News/>},
    {path: '/profile',  element: <Profile/>},
    {path: '/',  element: <Navigate to={'/news'}/>},
    {path: '/*',  element: <Error/>},
]

export const publicRoutes: IRoute[]  = [
    {path: '/login', element: <Login/>},
    {path: '/registration', element: <Registration/>},
    {path: '/*', element:  <Navigate to={'/login'}/>},
]