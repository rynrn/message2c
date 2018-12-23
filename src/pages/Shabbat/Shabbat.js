import React, { Component } from 'react';
import './Shabbat.css';
import { NameGenerate, Name } from '../../components';

class Shabbat extends Component {
  render() {
    return (
		<div className="Shabbat">
			<div className="topImg"></div>
			<h2 className="title">~ שבת שלום ~</h2>
			<div className="img">
				<div className="star"></div>
				<div className="candel candel-1"></div>
				<div className="candel candel-2"></div>
				<div className="candel candel-3"></div>
				<div className="candel candel-4"></div>
				<div className="candel candel-5"></div>
			</div>
			<div className="blessing">
			<h2 className="subTitle">פרשת השבוע - שמות</h2>
			<p>בני ישראל מגיעים כולם למצרים. והנה קם מלך חדש למצרים, אשר מעביד את בני ישראל בפרך וגוזר עליהם גזירות. פרעה מצווה להשליך ליאור כל בן זכר שנולד. המיילדות העבריות לא מקיימות את ציוויו של פרעה.</p>
			<p>יוכבד יולדת בן, ומניחה אותו בתיבה על שפת היאור, כדי שלא יהרגו אותו. בת פרעה מוצאת את התיבה, ומגדלת את הילד שמצאה. היא קוראת את שמו – משה. כאשר גדל משה, כנסיך מצרי, הוא יוצא אל העם ורואה את בני ישראל עובדים בפרך. הוא רואה איש מצרי מכה איש יהודי – והורג את המצרי. כאשר הדבר נודע במצרים, משה בורח ומגיע למדין.</p>
			<p>משה נושא לאישה את ציפורה בת יתרו כהן מדין, והופך לרועה צאנו. כשהוא מחפש אחר גדי, משה רואה סנה בוער באש – אך אינו נשרף. שם הוא שומע את הקב"ה מדבר אליו. הקב"ה נותן לו אותות, ושולח אותו בחזרה למצרים, להוציא משם את בני ישראל. אולם פרעה אינו מסכים לשלחם.</p>
			<Name/>
			</div>
			<NameGenerate/>
		</div>
    );
  }
}

export default Shabbat;
