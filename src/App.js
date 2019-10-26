import React from 'react';
import { ScrollingProvider, Section } from 'react-scroll-section';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import Header from './header';
import VideoScreen from './video-screen';
import Manipulations from './manipulations';
import Prices from './prices';
import Sales from './sales';
import YoutubeScreen from './youtube-video-screen';
import Advantages from './advantages';
import Map from './map';
import Footer from './footer';

import Styles from './styles.scss';
import AboutUs from './about-us';

const theme = createMuiTheme({});

export default function App () {
    return (<ThemeProvider theme = { theme }>
        <ScrollingProvider scrollBehavior = 'smooth'>
            <Header />
            <Section id = 'video'>
                <VideoScreen />
            </Section>
            <Section id = 'procedure'>
                <Manipulations />
            </Section>
            <Section id = 'price'>
                <Prices />
            </Section>
            <Section id = 'discount'>
                <Sales />
            </Section>
            <Section id = 'advant'>
                <Advantages />
            </Section>
            <Section id = 'youtube'>
                <YoutubeScreen />
            </Section>
            <Section id = 'about'>
                <AboutUs />
            </Section>
            <Section id = 'contact'>
                <Map />
            </Section>
            <Footer />
        </ScrollingProvider>
    </ThemeProvider>
    );
}
