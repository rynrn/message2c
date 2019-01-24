import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './BirthDay.scss';
import { NameGenerate, Name } from '../../components';

class BirthDay extends Component {
  render() {
    return (
		<div className="birth-day">
			<Helmet>
				<title>יום אהבה שמח | הקדשת ברכת אהבה</title>
				<meta property="og:title" content="יום אהבה שמח | הקדשת ברכת אהבה" />
				<meta property="og:image" content="/images/cards/birthDay-display.jpg" />
				<meta name="description" content="הקדשת ברכת אהבה" />
			</Helmet>
			<div className="birth-day__image">
				<div className="birth-day__image-animation"></div>
			</div>
			<div>
				<div className="birth-day__wrap-images">
					<div className="birth-day__img1"></div>
					<div className="birth-day__img2"></div>
				</div>

				<h1 className="birth-day__title">אהבה שלי</h1>
				<p className="birth-day__text">
					זה נכון שאנחנו לא צריכים תאריך כדי לציין את האהבה בינינו, אבל ביום האהבה הזה אני רוצה להזכיר לך, כמה האהבה הזו מיוחדת בשבילי, את כל האהבה שיש לי אליך.
					מהיום הראשון שהכרנו ידעתי שזו אהבה כמו באגדות. אהבת אמת, אהבה טהורה.
					<br/>
					<br/>
					יום אהבה שמח! שנחגוג יחד עד 120!
				</p>
				<Name emoji="❤️"/>
				<div className="birth-day__wrap-images">
					<div className="birth-day__img1"></div>
					<div className="birth-day__img2"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage="מוקדש במיוחד בשבילך" buttonStyle="CP2"/>
		</div>
    );
  }
}

export default BirthDay;
