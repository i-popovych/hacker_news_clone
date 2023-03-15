import React from 'react';
import s from "./footer.module.scss"
const Footer = () => {
    return (
        <footer className={s.appWrapper__footer}>
            <nav>
                <a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
                <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
                <a href="https://news.ycombinator.com/lists">Lists</a>
                <a href="https://github.com/HackerNews/API">API</a>
                <a href="https://news.ycombinator.com/security.html">Security</a>
                <a href="https://www.ycombinator.com/legal/">Legal</a>
                <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
                <a href="mailto:hn@ycombinator.com">Contact</a>
            </nav>
        </footer>
    );
};

export default Footer;