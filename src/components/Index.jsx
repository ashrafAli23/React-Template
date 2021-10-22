import React from 'react';
import { Fragment } from 'react';

import About from './about/About';
import Work from './work/Work';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import Socailmedia from './socialmedia/SocailMedia';
import Profile from './profile/Profile';
import Footer from './footer/Footer';

function Index() {
    return (
        <Fragment>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Socailmedia />
            <Footer />
        </Fragment>
    )
}

export default Index;
