import React from 'react';
import Header from "./pages/Header";
import './App.css'
import AppRouter from "./components/AppRouter";
import Preloader from "./common/Preloader/Preloader";
import {useInitialize} from "./hooks/useApp";

const App = () => {
    const isInitial = useInitialize();
    if(!isInitial) return <Preloader/>

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <AppRouter/>
        </div>
    );
};

export default App;