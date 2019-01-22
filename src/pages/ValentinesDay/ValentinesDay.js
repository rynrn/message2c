import React, { Component } from 'react';
import './ValentinesDay.scss';
import { NameGenerate, Name } from '../../components';

class ValentinesDay extends Component {
	constructor(props) {
		super(props);
		let origin = '',pathname = '';
		if (typeof(window) !== 'undefined') {
			origin = window.location.origin;
			pathname = window.location.pathname;
		}
		this.state = {
			whatsappMessage: `מוקדש במיוחד בשבילך
			👇👇👇
			${origin + pathname}/?n={NAME}
			`
		};
	}

  render() {
		const { whatsappMessage } = this.state;
    return (
		<div className="valentines-day">
			<div className="valentines-day__image">
				<div className="valentines-day__image-animation"></div>
			</div>
			<div>
				<div className="valentines-day__wrap-images">
					<div className="valentines-day__img1"></div>
					<div className="valentines-day__img2"></div>
				</div>

				<h1 className="valentines-day__title">אהבה שלי</h1>
				<p className="valentines-day__text">
					זה נכון שאנחנו לא צריכים תאריך כדי לציין את האהבה בינינו, אבל ביום האהבה הזה אני רוצה להזכיר לך, כמה האהבה הזו מיוחדת בשבילי, את כל האהבה שיש לי אליך.
					מהיום הראשון שהכרנו ידעתי שזו אהבה כמו באגדות. אהבת אמת, אהבה טהורה.
					<br/>
					<br/>
					יום אהבה שמח! שנחגוג יחד עד 120!
				</p>
				<Name emoji="❤️"/>
				<div className="valentines-day__wrap-images">
					<div className="valentines-day__img1"></div>
					<div className="valentines-day__img2"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage={whatsappMessage} buttonStyle="CP2"/>
		</div>
    );
  }
}

export default ValentinesDay;
