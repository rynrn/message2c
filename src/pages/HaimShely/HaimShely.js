import React, { Component } from 'react';
import './HaimShely.scss';
import { NameGenerate, Name } from '../../components';

class HaimShely extends Component {
  render() {
    return (
		<div className="haim-shely">
			<iframe
				className="haim-shely__iframe"
				title="youtube"
				width="560" height="315"
				src="https://www.youtube.com/embed/qEEzKfGa1oY"
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
			<div>
				<h2 className="haim-shely__title">חיים שלי, בהמון אהבה השיר מוקדש לך!</h2>
				<Name emoji="❤️"/>
			</div>
			<NameGenerate whatsappMessage="מוקדש במיוחד בשבילך" buttonStyle="CP2"/>
		</div>
    );
  }
}

export default HaimShely;
