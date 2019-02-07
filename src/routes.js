import {
    BirthDay,
    ValentinesDay,
    Hanuka,
    Shabbat,
    Morning,
    Love,
    HaimShely,
    Policy,
    Disclaimer,
    Home,
    Articles,
    LoveGreeting,
    HolidayGreeting,
    BirthdayGreetings,
    BlessingForPregnancy,
    ShabbatShalomGreeting
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
    },
    {
        path: '/ValentinesDay',
        component: ValentinesDay,
        exact: true,
    },
    {
        path: '/BirthDay',
        component: BirthDay,
        exact: true,
    },
    {
        path: '/Articles',
        component: Articles,
        exact: true,
    },
    {
      path: '/Articles/love-greeting',
      component: LoveGreeting,
      exact: true,
    },
    {
      path: '/Articles/holiday-greeting',
      component: HolidayGreeting,
      exact: true,
    },
    {
      path: '/Articles/birthday-greetings',
      component: BirthdayGreetings,
      exact: true,
    },
    {
        path: '/Articles/shabbat-shalom-greeting',
        component: ShabbatShalomGreeting,
        exact: true,
    },
    {
        path: '/Articles/blessing-for-pregnancy',
        component: BlessingForPregnancy,
        exact: true,
    }
];
