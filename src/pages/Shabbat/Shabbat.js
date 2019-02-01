import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Shabbat.scss';
import { NameGenerate, Name } from '../../components';

class Shabbat extends Component {
  render() {
    return (
		<div className="shabbat">
			<Helmet>
				<title>שבת שלום | הקדשת ברכת השבת</title>
				<meta property="og:title" content="שבת שלום | הקדשת ברכת השבת" />
				<meta property="og:image" content="/images/cards/Shabbat-display.jpg" />
				<meta name="description" content="הקדשת ברכת השבת" />
			</Helmet>
			<h1 className="shabbat__title">שבת שלום</h1>
			<div className="shabbat__image"></div>
			<div>
				<div className="shabbat__wrap-images">
					<div className="shabbat__img1"></div>
					<div className="shabbat__img2"></div>
				</div>
				<h2 className="shabbat__subtitle">פרשת השבוע</h2>
				<p className="shabbat__text"> <b>פרשת משפטים:</b> לאחר קבלת התורה, מצווה הקב"ה את משה ללמד את בני ישראל את מצוות התורה.</p>
				<p className="shabbat__text">הפרשה מתחילה בהלכות עבד עברי, ולאחר מכן דנה בדיני נזיקין – אדם שהזיק לחברו באופנים שונים, מתי חייב לשלם את הנזק שגרם, ומתי הוא פטור? הפרשה עוסקת, למשל, באדם שכרה בור, ואדם אחר נפל לתוכו, באדם שגנב מחברו וכן הלאה.</p>
				<p className="shabbat__text">התורה מצווה שלא לענות גר, יתום ואלמנה, אוסרת הלוואה בריבית ומזהירה מן השקר.</p>
				<p className="shabbat__text">לאחר מכן נלמדים הדינים של שנת השמיטה, וכן ציווי שמירת השבת והחגים. הקב"ה מזהיר את בני ישראל כי ארץ ישראל וכל טובה יהיו נתונים להם רק אם ישמרו את מצוות ה'.</p>
				<p className="shabbat__text">משה בונה מזבח תחת ההר, ובו 12 אבנים ל-12 שבטי ישראל. לאחר מכן עולה משה רבנו אל הר סיני למשך 40 יום ו-40, כדי להוריד אל ישראל את הלוחות.</p>
				<Name emoji="🙏"/>
				<div className="shabbat__wrap-images">
					<div className="shabbat__img3"></div>
					<div className="shabbat__img4"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage="מקדיש לך ברכת שבת שלום" buttonStyle="CP3"/>
		</div>
    );
  }
}

export default Shabbat;
