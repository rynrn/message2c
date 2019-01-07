import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, Card } from '../../components';
import { SITE_NAME } from '../../constants/site';

const pages = [
    {
        src: 'https://i.ytimg.com/vi_webp/qEEzKfGa1oY/maxresdefault.webp',
        title: 'הקדשת שיר - חיים שלי, של עדן בן זקן',
        text: 'כנס להקדיש',
        link: '/HaimShely'
    },{
        src: 'https://i.ytimg.com/vi_webp/qEEzKfGa1oY/maxresdefault.webp',
        title: 'הקדשת שיר - חיים שלי, של עדן בן זקן',
        text: 'כנס להקדיש',
        link: '/HaimShely'
    },{
        src: 'https://i.ytimg.com/vi_webp/qEEzKfGa1oY/maxresdefault.webp',
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
