import React, { Component } from 'react';
import './HaimShely.css';
import { NameGenerate, Name } from '../../components';

class HaimShely extends Component {
	constructor(props) {
		super(props);
		let origin = '',pathname = '';
		if (typeof(window) !== 'undefined') {
			origin = window.location.origin;
			pathname = window.location.pathname;
		}
		this.state = {
			whatsappMessage: `חיים שלי, זה בשבילך
			👇👇👇
			${origin + pathname}/?n={NAME}}
			`
		};
	}

  render() {
		const { whatsappMessage } = this.state;
    return (
		<div className="haim-shely">
			<iframe
				title="youtube"
				width="560" height="315"
				src="https://www.youtube.com/embed/qEEzKfGa1oY"
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
			<div>
				<h2 className="title">חיים שלי, בהמון אהבה השיר מוקדש לך!</h2>
				<Name emoji="❤️"/>
			</div>
			<NameGenerate whatsappMessage={whatsappMessage} buttonStyle="secondary"/>
		</div>
    );
  }
}

export default HaimShely;
