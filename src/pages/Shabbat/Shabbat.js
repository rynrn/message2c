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
				<p className="shabbat__text">פרשת יתרו: יתרו שומע על קריעת ים סוף ועל המלחמה בעמלק, ויוצא למדבר סיני אל משה רבנו, יחד עם ציפורה, אשת משה, ושני בניהם.</p>
				<p className="shabbat__text">יתרו רואה כיצד משה יושב לשפוט את העם כל היום כולו, ואומר לו כי השיטה אינה טובה, וכי עליו למנות שופטים אחרים שישפטו את העם בדברים הקלים, ואילו אליו יביאו רק את הדברים הקשים.</p>
				<p className="shabbat__text">משה שומע בקול יתרו, וממנה שרי אלפים, שרי מאות, שרי חמשים ושרי עשרות. יתרו חוזר אל ארצו.</p>
				<p className="shabbat__text">בני ישראל מגיעים אל מדבר סיני, ושם, על הר סיני, מכין אותם משה רבנו לקבלת התורה הקדושה. במשך 3 ימים מתקדשים העם, ומתבקשים להתרחק מהר סיני, עליו יקבלו את התורה.</p>
				<p className="shabbat__text">עשרת הדברות כתובות בפרשה זו, ובהן מפורטות המצוות החשובות שבין אדם למקום ושבין אדם לחברו, כמו: "לא תשא את שם ה' לשוא", שמירת שבת, כיבוד הורים, "לא תרצח", "לא תגנוב" וכן הלאה.</p>
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
