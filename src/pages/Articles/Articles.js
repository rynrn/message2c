import React from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import './Articles.scss';
import { Header } from '../../components';
import { SITE_NAME } from '../../constants/app';
// import 'Articles.scss';

const Articles = () => (
    <div>
        <Helmet>
            <title>{`${SITE_NAME} | מאמרים וטיפים`}</title>
            <meta property="og:title" content={`${SITE_NAME} | מאמרים וטיפים`} />
            <meta name="description" content="ברוכים הבאים! כאן תוכלו להתעדכן בכל הברכות והטיפים בזמן אמת. לקרוא מאמרים מעניינים, טיפים שימושיים ועוד ועוד.. בהחלט שווה לעקוב ולהישאר מעודכנים!" />
            <meta name="keywords" content="ברוכים הבאים! כאן תוכלו להתעדכן בכל הברכות והטיפים בזמן אמת. לקרוא מאמרים מעניינים, טיפים שימושיים ועוד ועוד.. בהחלט שווה לעקוב ולהישאר מעודכנים!" />
            <meta property="og:image" content="/images/cards/BirthDay-display.jpg" />
        </Helmet>
        <Header src="images/articles/bg.jpg" title="מאמרים וטיפים" subtitle="ברוכים הבאים! כאן תוכלו להתעדכן בכל הברכות והטיפים בזמן אמת. לקרוא מאמרים מעניינים, טיפים שימושיים ועוד ועוד.. בהחלט שווה לעקוב ולהישאר מעודכנים!"/>

        <div className="regular-page">

           <div className="regular-page__wrap-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras. Diam ut venenatis tellus in metus vulputate.</p>
                <br/>
                <hr className="article__line"/>
                <h3>What is Lorem Ipsum?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo. Blandit aliquam etiam erat velit scelerisque in dictum non.</p>
                <br/>
                <div className="article__img1"></div>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis.</p>
                <br/>
                <hr className="article__line"/>
                <h3>Where does it come from?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Quis imperdiet massa tincidunt nunc.</p>
                <br/>
                <div className="article__img2"></div>
                <br/>
            
            </div>

            <div className="regular-page__wrap-content"> 
                <hr className="article__line"/>                                                                                      
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

export default Articles;
