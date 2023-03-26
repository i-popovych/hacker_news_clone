import {Navigate} from "react-router";
import News from "../pages/NewsContainer";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Profile from "../pages/Profile";
import React from "react";

interface IRoute {
    path: string
    element: JSX.Element
}

export enum LinkEnum {
    NEW = '/newest',
    NEWS = '/news',
    PROFILE = '/profile',
    LOGIN = '/login',
    REGISTRATION = '/registration'

}

export const privateRoutes: IRoute[] = [
    {path: LinkEnum.NEW, element: <News type={'newstories'} headerName='New News'/>},
    {path: LinkEnum.NEWS, element: <News type={"topstories"} headerName='News'/>},
    {path: LinkEnum.PROFILE, element: <Profile/>},
    {path: LinkEnum.LOGIN, element: <Navigate to={'/news'}/>},
    {path: '/', element: <Navigate to={'/news'}/>},
    {path: '/*', element: <PageNotFound/>},
]

export const publicRoutes: IRoute[] = [
    {path: LinkEnum.LOGIN, element: <Login/>},
    {path: LinkEnum.REGISTRATION, element: <Registration/>},
    {path: '/*', element: <Navigate to={'/login'}/>},
]