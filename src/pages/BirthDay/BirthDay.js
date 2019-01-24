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

				<h1 className="birth-day__title">יום הולדת שמח</h1>
				<p className="birth-day__text">
				יום הולדת הגיע, זמן לברכה
				זמן לחבק חידושים בשמחה
				לסמוך שדברים יזרמו בבטחה
				שהטוב יפלס דרכו הנוחה
				יום הולדת הגיע, ואיתו עוד שנה
				שנה מלאה, עשירה, מהנה
				יום הולדת הגיע, זמן להתחלה משנה
				והמשך דרך טובה שכולה מתנה
					<br/>
					<br/>
					שנחגוג יחד עד 120!
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
