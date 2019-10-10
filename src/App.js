import React from 'react';
import Header from './header';
import VideoScreen from './video-screen';
import Manipulations from './manipulations';
import Prices from './prices';
import YoutubeScreen from './youtube-video-screen';
import Advantages from './advantages';
import Map from './map';
import Footer from './footer';

import Styles from './styles.scss';

export default function App () {
    return (<div>
        <div className = { Styles.App }>
            <Header />
            <VideoScreen />
            <Manipulations />
            <Prices />
            <YoutubeScreen />
            <Advantages />
            <Map />
            <Footer />
        </div>
        <h1 className = { Styles.FakeH }>Mobile version is unavailable now, use laptop please</h1>
    </div>);
}
