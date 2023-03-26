import React from 'react';
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {checkAuth, getUserName} from "../../selectors/auth";
import {useActions} from "../../hooks/useActions";
import LinksList from "./LinksList";
import AuthHeader from "./AuthHeader";

const Header = () => {
    const isAuth = useSelector(checkAuth)
    const userName = useSelector(getUserName)
    const {authThunk} = useActions();

    const logOutClick = async () => {
        await authThunk.logout();
        window.location.reload();
    }

    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <LinksList/>
                <AuthHeader isAuth={isAuth} userName={userName} logOutClick={logOutClick}/>
            </div>
        </header>
    );
};

export default Header;