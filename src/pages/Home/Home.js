import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, Card, DrawerMenu } from '../../components';
import { SITE_NAME } from '../../constants/app';
import { homeCards as pages, articles } from '../../constants/pages';

class Home extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isDrawerOpen: false
        };
    }

    toggle() {
        this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    }
    
    render() {
        return(
            <div>
                <Helmet>
                    <title>{`${SITE_NAME} | הקדשת ברכות ואיחולים`}</title>
                    <meta property="og:title" content={`${SITE_NAME} | הקדשת ברכות ואיחולים`} />
                    <meta name="description" content="ברכות והקדשות לאנשים שחשובים לנו. ברכות ליום הולדת, ברכת שבת שלום ועוד שפע של איחולים" />
                    <meta name="keywords" content="ברכות, איחולים, ברכות יום הולדת, ברכות ליום האהבה, ברכות לשבת שלום, הקדשת שיר למישהו שאוהבים" />
                    <meta property="og:image" content="/images/cards/BirthDay-display.jpg" />
                </Helmet>
                <DrawerMenu isDrawerOpen={this.state.isDrawerOpen}/>
                <Header onClick={this.toggle}
                        title="הקדשת ברכות ואיחולים"
                        subtitle="ברכות והקדשות לאנשים שחשובים לנו. ברכות ליום הולדת, ברכת שבת שלום ועוד שפע של איחולים"/>
                <div className="regular-page">
                    <div className="regular-page__wrap-content">
                        {pages.map((pages, i) => (
                            <Card key={i} {...pages}/>
                        ))}
                    </div>

                    <div className="regular-page__wrap-content text-right">
                        {articles.map((article, i) => (
                            <Card key={i} {...article}/>
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
    }
}

export default Home;
