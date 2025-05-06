import React from 'react';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

const routes = [
    {
        path: '/',
        exact: true,
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/about',
        element: <About />
    }
];

export default routes;