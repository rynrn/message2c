
import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header } from '../../components';
import { SITE_NAME } from '../../constants/app';

const HolidayGreeting = () => (
    <div>
        <Helmet>
            <title>{`${SITE_NAME} - ברכות לחג`}</title>
            <meta property="og:title" content={`${SITE_NAME} - ברכות לחג`} />
            <meta name="description" content="החגים בלוח השנה העברי הם רבים, ועוזרים לנו לחוש את זרימת הזמן בין ידינו. ברוב החגים, יש סט קבוע של ברכות וטקסים המלווים אותם, חלקם הם מסורת דתית בת אלפי שנים, וחלקם מסורת ישראלית צעירה יותר" />
            <meta name="keywords" content="ברכות לחג, ראש השנה, חגים, לכל חג תתאים ברכה מסוג אחר" />
            <meta property="og:image" content="/images/cards/Shabbat-display.jpg" />
        </Helmet>
        <Header style={{ backgroundImage: `url('/images/articles/bg.jpg')` }}
                title="ברכות לחג"/>
        <div className="regular-page">
           <div className="regular-page__wrap-content container text-right">
                <h2>למה בכלל צריך ברכה משלנו בחגים?</h2>
                <p>
                החגים בלוח השנה העברי הם רבים, ועוזרים לנו לחוש את זרימת הזמן בין ידינו. ברוב החגים, יש סט קבוע של ברכות וטקסים המלווים אותם, חלקם הם מסורת דתית בת אלפי שנים, וחלקם מסורת ישראלית צעירה יותר. הרבה אנשים תוהים בינם לבין עצמם מדוע צריך ברכות לחג. הסיבה לכך היא ברורה, כי אנחנו רוצים ליצוק תוכן אישי לחגים האלו. מה זה משנה אם הילד בפסח לומד על יציאת מצרים, אם הוא אינו מבין את החשיבות של החג למשפחה האישית שלו? מה המשמעות של לשבת בסוכה אם הוא לא מבין שעבור סבא שלו זה מרגש לראות אותו ככה, כמו שישבו כל אבותיו לפניו.
                </p>
                <hr className="article__line"/>
                <h2>לכל חג תתאים ברכה מסוג אחר</h2>
                <p>
                לכל חג אופי שונה, כמו שלכל קשר משפחתי. חשוב מאוד לא להתקבע על מבנה קבוע לברכות לחג, אלא להתאים את אופי הברכה לחג שבו מדובר. דוגמאות נפוצות לכך כוללות:
                </p>
                <ul>
                    <li>
                        <strong>ראש השנה</strong>: בראש השנה תתאים ברכה בעלת אופי קצת יותר פילוסופי, העוסקת בהתקדמות הזמן ובהתקדמות שלנו בשנה החולפת.
                    </li>
                    <li>
                        <strong>פורים</strong>: ברכה לפורים צריכה להיות קלילה ומשמחת, ולהשתלב בחגיגה הכללית.
                    </li>
                    <li>
                        <strong>חנוכה</strong>: ברכה לחנוכה צריכה להיות בהתאם למנהגים ולעולם הדימויים של החג, בין אם מדובר בניצחון האור על החושך, ובין אם מדובר פשוט בטעם המתוק של הסופגנייה.
                    </li>
                    <li>
                        <strong>שבועות</strong>: שבועות הוא אחד מארבעת הרגלים, ואפשר להתאים לו ברכה בסגנון של צמיחה וקטיפת הפירות של הגדילה האישית של כל אחד מאתנו. 
                    </li>
                </ul>
                <h2>חשוב להשקיע בברכות לחג</h2>
                <p>
                ברכות לא מושקעות לחג מראות שלא השקענו מספיק ביקירנו. גם מתנה, אם ניתנת בחג ללא ברכה רצינית, לא תייצר את אותו האפקט. הענקת ברכות איכותיות לחג תיתן ליקיריכם להרגיש שאתם אוהבים אותם, ושאתם חלק חשוב מהחג בליבם. 
                </p>
            </div>
        </div>
    </div>
);

export default HolidayGreeting;
