import React from 'react';
import {
    Hanuka,
    Shabbat,
    Morning,
    Love,
    HaimShely,
    Policy,
    Disclaimer,
    Home
} from './pages';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/Policy',
        component: Policy,
        exact: true,
    },
    {
        path: '/Disclaimer',
        component: Disclaimer,
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
