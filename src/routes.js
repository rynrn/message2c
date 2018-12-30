import React from 'react';
import {
    Hanuka,
    Shabbat,
    Morning,
    Love,
    HaimShely
} from './pages';

const Index = () => <h2>Home</h2>;

export default [
    {
        path: '/',
        component: Index,
        exact: true,
    },
    {
        path: '/Hanuka',
        component: Hanuka,
        exact: true,
    },
    {
        path: '/Shabbat',
        component: Shabbat,
        exact: true,
    },
    {
        path: '/Morning',
        component: Morning,
        exact: true,
    },
    {
        path: '/Love',
        component: Love,
        exact: true,
    },
    {
        path: '/HaimShely',
        component: HaimShely,
        exact: true,
    }
];
