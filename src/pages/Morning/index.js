import React, { Component } from 'react';
import './index.css';
import { Input, Name } from '../../components';

class Morning extends Component {
  render() {
    return (
		<div className="Morning">
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
			<h2 className="title">בוקר טוב כבר אמרנו :)</h2>
			<p>קרני השמש בוקעות מבעד לאופק והנה בא לו עוד בוקר נפלא שמסמל התחלה חדשה.</p>
			<p>זה הזמן לנקות את הנפש מכל מה שהכביד עליה אמש, ולצאת ליום חדש שיביא איתו רק דברים טובים – אם כך נחליט, כך יהיה. </p>
			<p>מישהו בחר לשתף איתך את הברכה הזו כדי לאחל לך בוקר טוב, ואין דרך טובה יותר להתחיל את היום מאשר עם ברכה מקסימה שכזו.</p>
			<h3 className="subTitle">שיהיה לכם יום נהדר!</h3>
			<Name/>
			</div>
			<Input/>
		</div>
    );
  }
}

export default Morning;
