import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <nav>
                <ul className={s.nav_ul}>
                    <li><NavLink to={'news'}>news</NavLink></li>
                    <li><NavLink to={'past'}>past</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;