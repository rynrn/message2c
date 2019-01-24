import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, Card } from '../../components';
import { SITE_NAME } from '../../constants/app';

const pages = [
    {
        src: '/images/cards/ValentinesDay-display.jpg',
        title: 'ברכה לבן או בת זוג ליום האהבה',
        text: 'כנס לברך',
        link: '/ValentinesDay'
    },{
        src: '/images/cards/HaimShely-display.jpg',
        title: 'הקדשת שיר - חיים שלי, של עדן בן זקן',
        text: 'כנס להקדיש',
        link: '/HaimShely'
    },{
        src: '/images/cards/Shabbat-display.jpg',
        title: 'הקדשת שבת שלום עם פרשת השבוע',
        text: 'כנס להקדיש',
        link: '/Shabbat'
    },
    {
        src: '/images/cards/BirthDay-display.jpg',
        title: 'ברכות ואיחולים ליום הולדת',
        text: 'כנס להקדיש',
        link: '/BirthDay'
    }
];

const Home = () => (
    <div>
        <Helmet>
          <title>{SITE_NAME}</title>
          <meta name="description" content={SITE_NAME} />
        </Helmet>
        <Header title="הקדשת ברכות" subtitle="ברכות והקדשות לאנשים שחשובים לנו"/>
        <div className="regular-page">
            <div className="regular-page__wrap-content">
                {pages.map((pages, i) => (
                    <Card key={i} {...pages}/>
                ))}
            </div>

            <div className="regular-page__wrap-content">
                הקדשת ברכות לאנשים שבאמת חשובים לנו. כמה קל ופשוט זה לצור ברכה אישית לחבר\ה.
                <br/>
                <br/>
                פשוט נכנסים לאחד הברכות או ההקדשות, ממלאים את שם שלך כדי שיופיע על צג מקבל ההודעה ופשוט לשלוח את ההודעה בקלות ומהירות.
                <br/>
                <br/>
                כל מי שיקבל את הברכה הזו פשוט ישמח לקבל את הברכה שלך ויראה בה השקע ומחשבה רבה.
                <br/>
                <br/>
                <b>שליחת ההודעה נעשית באופן חינמי לחלוטין</b>, שולח ההודעה וגם מקבל ההודעה לא צריכים לדאוג, השימוש בברכות הוא פשוט חינם!
                <br/>
                <br/>
                אז תשלחו כמה שאתם רוצים, ללא הגבלה, פשוט תשלחו!
            </div>
        </div>
    </div>
);

export default Home;
