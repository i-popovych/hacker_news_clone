import React from 'react';
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {LinkEnum} from "../../utils/routes";

const LinksList = () => {
    return (
        <nav className={s.header__nav}>
            <div><img className={s.header__logo} src={require('../../assets/nh_logo.png')} alt="hacker news logo"/></div>
            <div><NavLink to={LinkEnum.NEWS}>News</NavLink></div>
            <div><NavLink to={LinkEnum.NEW}>New</NavLink></div>

            <div><NavLink to={'comments'}>Comments</NavLink></div>
            <div><NavLink to={'ask'}>Ask</NavLink></div>
            <div><NavLink to={'show'}>Show</NavLink></div>
            <div><NavLink to={'jobs'}>Jobs</NavLink></div>
            <div><NavLink to={'submit'}>Submit</NavLink></div>
        </nav>
    );
};

export default LinksList;