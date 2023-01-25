import {Navigate} from "react-router";
import News from "../pages/NewsContainer";
import Past from "../pages/Past";
import Error from "../pages/Error";

export const privateRoutes = [
    {path: '/past',  element: <Past/>},
    {path: '/news',  element: <News/>},
    {path: '/',  element: <Navigate to={'/news'}/>},
    {path: '/*',  element: <Error/>},
]