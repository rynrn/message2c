import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../RegularPage.scss';
import { Header, DrawerMenu } from '../../components';
import { SITE_NAME } from '../../constants/app';

class Policy extends Component {
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
                <title>Privacy Policy | {SITE_NAME}</title>
                <meta name="description" content="Privacy Policy" />
            </Helmet>
            <DrawerMenu isDrawerOpen={this.state.isDrawerOpen}/>
            <Header onClick={this.toggle} title="Privacy Policy"/>
            <div className="regular-page">
                <div className="regular-page__wrap-content">
                    <div className="regular-page__content container">
                        <p className="desc">Privacy is important to us and we have added this privacy page, to explain a few quick things about the site and what info we collect, which is not much at all.
                        </p>

                        <p className="heading">What Info Do We Collect and Why?</p>

                        <p className="desc">We do not collect any info directly from users. Period!!</p>

                        <p className="heading">Cookies</p>

                        <p className="desc">This blog doesn't use a technology known as “cookies”. Though we use Facebook Pixel. The Facebook pixel is an analytics tool that allows us to measure the effectiveness of our advertising by understanding the actions users take on your website. 
                        </p>
                        <p className="heading">Copyright</p>

                        <p className="desc">Under no circumstance can any content on this website be copied or reproduced in any way. If any person or company does use the owner of this websites name, video, or blog content without getting written consent from the site then legal action may be undertaken against the offending parties.
                        </p>
                        <p className="heading">What About Legally Compelled Disclosure of Information?</p>

                        <p className="desc">We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights. We may also disclose account information when we have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be violating our Terms of Service or to protect the safety of our users and the Public.
                        </p>
                        <p className="heading">What About Other Web Sites Linked to Our Web Site?</p>

                        <p className="desc">We are not responsible for the practices employed by Web sites linked to or from our Website or the information or content contained therein. Often links to other Websites are provided solely as pointers to information on topics that may be useful to the users of our Web site.
                        Please remember that when you use a link to go from our Website to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including web sites, which have a link on our Website, is subject to that Web site’s own rules and policies. Please read over those rules and policies before proceeding.
                        </p>
                        <p className="heading">Your Consent</p>

                        <p className="desc">By using our Website you consent to our collection and use of your personal information as described in this Privacy Policy. We reserve the right to amend this privacy policy at any time with or without notice.
                        </p>

                        <p className="heading">Policy Modifications</p>

                        <p className="desc">We may change this Privacy Policy from time to time. If/when changes are made to this privacy policy, we will email users who have given us permission to do so. We will post any changes here, so be sure to check back periodically. However, please be assured that if the Privacy Policy changes in the future, we will not use the personal information you have submitted to us under this Privacy Policy in a manner that is materially inconsistent with this Privacy Policy, without your prior consent.
                        </p>
                        <p className="heading">Last Edited Jan 07, 2019</p>

                        <p className="desc">If you require any other information or have any questions about our privacy policy, please contact us here without any hesitation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Policy;