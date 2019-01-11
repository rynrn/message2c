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
			whatsappMessage: `חיים שלי, זה בשבילך
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
					<div className="valentines-day__rh1"></div>
					<div className="valentines-day__rh2"></div>
				</div>
				<p className="valentines-day__text">
					אהבה שלי,
					<br/>
					<br/>
					זה נכון שאנחנו לא צריכים תאריך כדי לציין את אהבתנו, אבל ביום האהבה הזה אני רוצה להזכיר לך, כמה האהבה הזו מיוחדת בשבילי, כמה אהבה יש לי אליך.
					מהיום הראשון שהכרנו ידעתי שזו אהבה כמו באגדות. אהבת אמת, אהבה טהורה.
					<br/>
					<br/>
					יום אהבה שמח! שנחגוג יחד עד 120!
				</p>
				<Name emoji="❤️"/>
				<div className="valentines-day__wrap-images">
					<div className="valentines-day__rh1"></div>
					<div className="valentines-day__rh2"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage={whatsappMessage} buttonStyle="secondary"/>
		</div>
    );
  }
}

export default ValentinesDay;
