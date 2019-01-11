import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, Card } from '../../components';
import { SITE_NAME } from '../../constants/site';

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
    }
];

const Home = () => (
    <div>
        <Helmet>
          <title>{SITE_NAME}</title>
          <meta name="description" content={SITE_NAME} />
        </Helmet>
        <Header title="דף הבית"/>
        <div className="regular-page">
            <div className="regular-page__wrap-content">
                {pages.map((pages, i) => (
                    <Card key={i} {...pages}/>
                ))}
            </div>
        </div>
    </div>
);

export default Home;
