import React from 'react';
import Header from "./pages/Header";
import './App.css'
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <AppRouter/>
        </div>
    );
};

export default App;