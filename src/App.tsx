import React, {useEffect} from 'react';
import Header from "./pages/Header/Header";
import './App.scss'
import AppRouter from "./components/AppRouter";
import Preloader from "./common/Preloader/Preloader";
import {useInitialize} from "./hooks/useApp";
import Footer from "./components/Footer/Footer";
import NewsAPI from "./api/news";

const App = () => {
    useEffect( () => {
        NewsAPI.getNews(1, 10)
    }, [])
    const isInitial = useInitialize();
    if (!isInitial) return <Preloader/>

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <section className={'content'}>
                <AppRouter/>
            </section>
            <Footer/>
        </div>
    );
};

export default App;