import React from 'react';
import './Header.scss';

const Header = ({ title, subtitle, style = {} }) => (
    <header className="header">
        <div className="header__wrap-content" style={style}>
            <div className="container">
                {title && <h1 className="header__title">{title}</h1>}
                {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
            </div>
        </div>
    </header>
);

export default Header;
