import React, { Component } from 'react';
import './index.css';
import { Input, Name } from '../../components';

class Love extends Component {
  render() {
    return (
		<div className="Love">
			<div className="topImg"></div>
			<div className="title-holiday"></div>
			<div className="img">
				<div className="star"></div>
				<div className="candel candel-1"></div>
				<div className="candel candel-2"></div>
				<div className="candel candel-3"></div>
				<div className="candel candel-4"></div>
				<div className="candel candel-5"></div>
			</div>
			<div className="blessing">
			<h2 className="subTitle">~ LOVE LOVE LOVE ~</h2>
			<p>כשאוהבים באמת, אפשר להראות זאת רק בצורה אחת - עם נשיקה גדולה ואוהבת.</p>
			<p>זה לא משנה אם הנשיקה היא על הלחי, על השפתיים, או אפילו על גב היד, היא תמיד אומרת יותר מכל דבר אחר. </p>
			<p>שלחתי לך את הנשיקות המקסימות האלה כדי להראות לך כמה אני אוהב אותך ולתת לך רגע מתוק של נחת.</p>
			<Name/>
			</div>
			<Input/>
		</div>
    );
  }
}

export default Love;
