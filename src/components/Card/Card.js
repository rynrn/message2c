import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => (
    <Link to={props.link} className="card">
        <figure className="card__figure">
            {/* <img className="card__img" src={props.src} alt={props.title}/> */}
            <div className="card__img" style={{ backgroundImage: `url(${props.src})` }}></div>
        </figure>
        <h3 className="card__title">{props.title}</h3>
        <button className="card__button">{props.text}</button>
    </Link>
);

export default Card;
