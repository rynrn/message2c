import React from 'react';
import './Footer.scss';

const Footer = (props) => (
    <footer className="footer">
        <div className="footer__wrap-content">
            <div className="footer__content">
                <nav className="footer__menu-wrap">
                    <ul className="footer__menu">
                        {props.pages.map((page, i) => (
                            <li key={i} className="footer__menu-item">
                                <a href={page.href} className="footer__menu-item-link">{page.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
);

export default Footer;
