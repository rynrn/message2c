import 'ignore-styles';
import fs from 'fs';
import path from 'path';
import express from 'express';
import serveStatic  from 'serve-static';
import cheerio from 'cheerio';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import Helmet from 'react-helmet';
import Layout from './src/components/Layout';
import routes from './src/routes';

const htmlFile = fs.readFileSync(__dirname + '/build/index.html', 'utf8');

const app = express();
const port = process.env.PORT || 3000;

app.use(serveStatic(path.join(__dirname, 'build'), {
    index: false,
    maxAge: '1d'
}));

app.get('/*', (req, res) => {
    const context = {};
    const dataRequirements =
        routes
            .filter(route => matchPath(req.url, route)) // filter matching paths
            .map(route => route.component) // map to components
            .filter(comp => comp.serverFetch) // check if components have data requirement

    Promise.all(dataRequirements).then(() => {
        const jsx = (
                <StaticRouter context={ context } location={ req.url }>
                    <Layout />
                </StaticRouter>
        );
        const reactDom = renderToString(jsx);
        const helmetData = Helmet.renderStatic();

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlTemplate(reactDom, helmetData));
    });
});

function htmlTemplate(reactDom, helmetData) {
    const $ = cheerio.load(htmlFile);
    $('head').append(helmetData.title.toString());
    $('head').append(helmetData.meta.toString());
    $('#root').html(reactDom);
    return $.html();
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));