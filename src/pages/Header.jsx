import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/authReducer";
import {checkAuth, getUserName} from "../selectors/auth";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => checkAuth(state))
    const userName = useSelector(state => getUserName(state))

    const logOutClick = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <header className={s.header}>
            <nav>
                <ul className={s.nav_ul}>
                    <li><NavLink to={'news'}>news</NavLink></li>
                    <li><NavLink to={'past'}>past</NavLink></li>
                </ul>
            </nav>
            <div className={s.authInfo}>
                {!isAuth && <div><NavLink to={'registration'}>registration</NavLink></div>}
                {!isAuth && <div><NavLink to={'login'}>login</NavLink></div>}
                {isAuth && <div><NavLink to={'profile'}>{userName}</NavLink></div>}
                {isAuth && <div onClick={logOutClick}><NavLink to={'logout'}>log out</NavLink></div>}
            </div>
        </header>
    );
};

export default Header;