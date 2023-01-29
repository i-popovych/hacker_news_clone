import React, {useEffect} from 'react';
import Header from "./pages/Header";
import './App.css'
import AppRouter from "./components/AppRouter";
import {checkAuth} from "./redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {checkInitialize} from "./selectors/auth";
import Preloader from "./common/Preloader/Preloader";

const App = () => {
    const dispatch = useDispatch();
    const isInitial = useSelector(state => checkInitialize(state))
    useEffect(() => {
        dispatch(checkAuth());
    }, [])
    if(!isInitial) return <Preloader/>
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <AppRouter/>
        </div>
    );
};

export default App;