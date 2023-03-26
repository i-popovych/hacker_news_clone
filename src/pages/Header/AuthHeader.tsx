import React, { FC } from 'react';
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

interface Props {
    isAuth: boolean,
    userName: string | undefined
    logOutClick: () => void
}

const AuthHeader: FC<Props> = ({isAuth, userName, logOutClick}) => {
    return (
        <section className={s.header__authData}>
            {!isAuth && <div><NavLink to={'registration'}>registration</NavLink></div>}
            {!isAuth && <div><NavLink to={'login'}>login</NavLink></div>}
            {isAuth && <div><NavLink to={'profile'}>{userName}</NavLink></div>}
            {isAuth && <div onClick={logOutClick}><NavLink to={'logout'}>log out</NavLink></div>}
        </section>
    );
};

export default AuthHeader;