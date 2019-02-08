import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, Card } from '../../components';
import { SITE_NAME } from '../../constants/app';
import { articles } from '../../constants/pages';

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
            {articles.map((article, i) => (
                <Card key={i} {...article}/>
            ))}
            </div>
        </div>
    </div>
);

export default Articles;
