import React from 'react';
import { Icon } from 'antd';
import './Header.scss';
import { isFunction } from 'lodash';

const Header = ({ title, subtitle, style = {} , onClick }) => (
    <header className="header">
        <div className="header__wrap-content" style={style}>
            {isFunction(onClick) && <Icon type="bars" rotate={180} className="header__icon" onClick={onClick}/>}
            <div className="container">
                {title && <h1 className="header__title">{title}</h1>}
                {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
            </div>
        </div>
    </header>
);

export default Header;
