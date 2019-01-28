import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './BirthDay.scss';
import { NameGenerate, Name } from '../../components';

class BirthDay extends Component {
  render() {
    return (
		<div className="birth-day">
			<Helmet>
				<title>יום הולדת שמח | הקדשת ברכת יום הולדת</title>
				<meta property="og:title" content="יום הולדת שמח | הקדשת ברכת יום הולדת" />
				<meta property="og:image" content="/images/cards/BirthDay-display.jpg" />
				<meta name="description" content="הקדשת ברכת יום הולדת" />
			</Helmet>
			<div className="birth-day__image">
				<div className="birth-day__image-animation"></div>
				<div className="birth-day__img3"></div>
				<div className="birth-day__img4"></div>
				<div className="birth-day__img5"></div>
				<div className="birth-day__img6"></div>
			</div>
			<div>
				<div className="birth-day__wrap-images">
					<div className="birth-day__img1"></div>
					<div className="birth-day__img2"></div>
					
				</div>

				<h1 className="birth-day__title">יום הולדת שמח</h1>
				<p className="birth-day__text">
					רציתי לאחל לך שפע של איחולים וברכות,
					מזל טוב, בריאות, אושר, הצלחה ומלא אהבה!
					<br/><br/>
					מי ייתן וכל חלומותך יתגשמו וקרן אור תמיד תאיר עליך
					<br/>
					ושנחגוג יחד עד 120!
				</p>
				<Name emoji="🎊🎉"/>
				<div className="birth-day__wrap-images">
					<div className="birth-day__img1"></div>
					<div className="birth-day__img2"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage="מוקדש במיוחד בשבילך" buttonStyle="CP4"/>
		</div>
    );
  }
}

export default BirthDay;
