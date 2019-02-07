import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, Card } from '../../components';
import { SITE_NAME } from '../../constants/app';


const pages = [
    {
        title: 'ברכות האהבה',
        link: '/Articles/love-greeting'
    }, {
        title: 'ברכות לחג',
        link: '/holiday-greeting'
    }, {
        title: 'ברכות ליום הולדת',
        link: '/Articles/birthday-greetings'
    }, {
        title: 'ברכת שבת שלום',
        link: '/Articles/shabbat-shalom-greeting'
    }, {
        title: 'ברכה להריון ולידה',
        link: '/Articles/blessing-for-pregnancy'
    }
];

const Articles = () => (
    <div>
        <Helmet>
            <title>{`${SITE_NAME} - מאמרים וברכות`}</title>
            <meta property="og:title" content={`${SITE_NAME} - מאמרים וברכות`} />
            <meta name="description" content="קצת להבין על ברכות, כתבנו קצת טקסט שיעזור לך להבין ולראות איך אפשר לכתוב ברכה בעצמך" />
            <meta name="keywords" content="ברכות, מאמרים, איך לכתוב ברכה " />
        </Helmet>
        <Header style={{ backgroundImage: `url('/images/articles/bg.jpg')` }}
                title="מאמרים וברכות"/>
        <div className="regular-page">
           <div className="regular-page__wrap-content container text-right">
            {pages.map((pages, i) => (
                <Card key={i} {...pages}/>
            ))}
            </div>
        </div>
    </div>
);

export default Articles;
