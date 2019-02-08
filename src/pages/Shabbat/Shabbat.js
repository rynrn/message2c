import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Shabbat.scss';
import { NameGenerate, Name } from '../../components';

class Shabbat extends Component {
  render() {
    return (
		<div className="shabbat">
			<Helmet>
				<title>שבת שלום במיוחד בשבילך</title>
				<meta property="og:title" content="שבת שלום במיוחד בשבילך" />
				<meta property="og:image" content="/images/cards/Shabbat-display.jpg" />
				<meta name="description" content="ברכה לשבת שלום" />
			</Helmet>
			<h1 className="shabbat__title">שבת שלום</h1>
			<div className="shabbat__image"></div>
			<div>
				<div className="shabbat__wrap-images">
					<div className="shabbat__img1"></div>
					<div className="shabbat__img2"></div>
				</div>
				<h2 className="shabbat__subtitle">ברכה לשבת שלום</h2>
				<p className="shabbat__text">רגע לפני ששבת המלכה מאירה את בית ישראל, רציתי לאחל לך שבת שלום. שתהיה שבת מבורכת ונעימה לך ולכל בני ביתך, שתיהנה ממנוחה טובה ושתצבור כוחות מחודשים. שרק קולות של צחוק ואושר יישמעו סביב שולחנך, שתזכו אתה ובני ביתך לבריאות שלמה, לשפע ולכל טוב, ושקדושת השבת תאיר את ביתכם לאורך כל חייכם. שתהיה לך שבת של שלום, של עונג ושל ברכה.</p>
				<Name emoji="🙏"/>
				<div className="shabbat__wrap-images">
					<div className="shabbat__img3"></div>
					<div className="shabbat__img4"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage="שבת שלום במיוחד בשבילך מ{NAME}" buttonStyle="CP3"/>
		</div>
    );
  }
}

export default Shabbat;
