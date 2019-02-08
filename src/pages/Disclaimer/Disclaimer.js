import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, DrawerMenu } from '../../components';
import { SITE_NAME } from '../../constants/app';


class Disclaimer extends Component {
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
            <title>Disclaimer | {SITE_NAME}</title>
            <meta name="description" content="Disclaimer" />
            </Helmet>
            <DrawerMenu isDrawerOpen={this.state.isDrawerOpen}/>
            <Header onClick={this.toggle} title="Disclaimer"/>
            <div className="regular-page">
                <div className="regular-page__wrap-content">
                    <div className="regular-page__content container">
                        <p className="desc">This is important page for all the visitors visiting this site. This is just an entertainment site, nothing more than that. Visitors discretion needed.
                        </p>
                        <p className="desc">We assure you that our content is not violating the policies of any organisation. But still if they find anything against their policies they can contact our designing committee, which will come up with best possible solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Disclaimer;