import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {checkAuth, getUserName} from "../../selectors/auth";
import {useActions} from "../../hooks/useActions";

const Header = () => {
    const isAuth = useSelector(checkAuth)
    const userName = useSelector(getUserName)
    const {authThunk} = useActions();

    const logOutClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        authThunk.logout();
    }

    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <nav className={s.header__nav}>
                    <div id={'asd'}><img className={s.header__logo} src={require('../../images/nh_logo.png')} alt="hacker news logo"/></div>
                    <div><NavLink to={'news'}>news</NavLink></div>
                    <div><NavLink to={'past'}>past</NavLink></div>

                    <div><NavLink to={'comments'}>comments</NavLink></div>
                    <div><NavLink to={'ask'}>ask</NavLink></div>
                    <div><NavLink to={'show'}>show</NavLink></div>
                    <div><NavLink to={'jobs'}>jobs</NavLink></div>
                    <div><NavLink to={'submit'}>submit</NavLink></div>
                </nav>
                <section className={s.header__authData}>
                    {/*todo виділи в окремий компонент*/}
                    {!isAuth && <div><NavLink to={'registration'}>registration</NavLink></div>}
                    {!isAuth && <div><NavLink to={'login'}>login</NavLink></div>}
                    {isAuth && <div><NavLink to={'profile'}>{userName}</NavLink></div>}
                    {isAuth && <div onClick={logOutClick}><NavLink to={'logout'}>log out</NavLink></div>}
                </section>
            </div>
        </header>
    );
};

export default Header;