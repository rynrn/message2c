import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, text, src, description, link = '#' }) => (
    <Link to={link} className="card">
        {src &&
            <figure className="card__figure">
                <div className="card__img" style={{ backgroundImage: `url(${src})` }}></div>
            </figure>
        }
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {text && <button className="card__button">{text}</button>}
    </Link>
);

export default Card;
