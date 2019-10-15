import React from 'react';
import { ScrollingProvider, Section } from 'react-scroll-section';

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

export default function App () {
    return (<ScrollingProvider scrollBehavior = 'smooth'>
        <div className = { Styles.App }>
            <Header />
            <VideoScreen />
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
            <YoutubeScreen />
            <Section id = 'contact'>
                <Map />
            </Section>
            <Footer />
        </div>
        <h1 className = { Styles.FakeH }>Mobile version is unavailable now, use laptop please</h1>
    </ScrollingProvider>);
}
