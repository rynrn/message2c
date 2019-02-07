import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import { Footer } from "./";

const footerPages = [
    { text: 'לעוד הקדשות', href: '/' },
    { text: 'מאמרים', href: '/Articles' },
    { text: 'Policy', href: '/Policy' },
    { text: 'Disclaimer', href: '/Disclaimer' }
];

const Layout = () => (
    <div>
        <Switch>
            { routes.map( route => <Route key={ route.path } { ...route } /> ) }
        </Switch>
        <Footer pages={footerPages}/>
    </div>
);

export default Layout;
