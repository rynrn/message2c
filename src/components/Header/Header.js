import React from 'react';
import './Header.scss';

const Header = (props) => (
    <header className="header">
        <div className="header__wrap-content">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                <h2 className="header__subtitle">{props.subtitle}</h2>
            </div>
        </div>
    </header>
);

export default Header;
