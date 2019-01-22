import React, { Component } from 'react';
import './Shabbat.scss';
import { NameGenerate, Name } from '../../components';

class Shabbat extends Component {
  render() {
    return (
		<div className="shabbat">
			<h1 className="shabbat__title">שבת שלום</h1>
			<div className="shabbat__image"></div>
			<div>
				<div className="shabbat__wrap-images">
					<div className="shabbat__img1"></div>
					<div className="shabbat__img2"></div>
				</div>
				<h2 className="shabbat__subtitle">פרשת השבוע</h2>
				<p className="shabbat__text">
				בני ישראל מגיעים כולם למצרים. והנה קם מלך חדש למצרים, אשר מעביד את בני ישראל בפרך וגוזר עליהם גזירות. פרעה מצווה להשליך ליאור כל בן זכר שנולד. המיילדות העבריות לא מקיימות את ציוויו של פרעה.
				<br/>
				יוכבד יולדת בן, ומניחה אותו בתיבה על שפת היאור, כדי שלא יהרגו אותו. בת פרעה מוצאת את התיבה, ומגדלת את הילד שמצאה. היא קוראת את שמו – משה. כאשר גדל משה, כנסיך מצרי, הוא יוצא אל העם ורואה את בני ישראל עובדים בפרך. הוא רואה איש מצרי מכה איש יהודי – והורג את המצרי. כאשר הדבר נודע במצרים, משה בורח ומגיע למדין.
				<br/>
				משה נושא לאישה את ציפורה בת יתרו כהן מדין, והופך לרועה צאנו. כשהוא מחפש אחר גדי, משה רואה סנה בוער באש – אך אינו נשרף. שם הוא שומע את הקב"ה מדבר אליו. הקב"ה נותן לו אותות, ושולח אותו בחזרה למצרים, להוציא משם את בני ישראל. אולם פרעה אינו מסכים לשלחם.
				</p>
				<Name emoji="🙏"/>
				<div className="shabbat__wrap-images">
					<div className="shabbat__img3"></div>
					<div className="shabbat__img4"></div>
				</div>
			</div>
			<NameGenerate whatsappMessage="כנס, מקדיש לך ברכת שבת שלום" buttonStyle="CP3"/>
		</div>
    );
  }
}

export default Shabbat;
