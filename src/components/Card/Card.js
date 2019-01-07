import React from 'react';
import { withRouter } from 'react-router-dom';
import './Card.scss';

const Card = (props) => (
    <div className="card" onClick={() => props.history.push(props.link)}>
        <figure className="card__figure">
            <img className="card__img" src={props.src} alt={props.title}/>
        </figure>
        <h3 className="card__title">{props.title}</h3>
        <button className="card__button">{props.text}</button>
    </div>
);

export default withRouter(Card);
