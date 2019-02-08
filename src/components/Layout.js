import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import { Footer } from "./";
import { footerPages } from '../constants/pages';

const Layout = () => (
    <div>
        <Switch>
            { routes.map( route => <Route key={ route.path } { ...route } /> ) }
        </Switch>
        <Footer pages={footerPages}/>
    </div>
);

export default Layout;
