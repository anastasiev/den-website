import React from 'react';

import Styles from './styles.scss';

import Title from './Title';

import video from '../assets/video_massage_720.mp4';
import mobilePic from '../assets/Picture4.png';

export default function VideoScreen () {
    return (
        <div className = { Styles.VideoScreen }>
            <Title />
            <div className = { Styles.VideoContainer }>
                <video autoPlay loop muted name = 'media'>
                    <source
                        src = { video }
                        type = 'video/mp4'
                    />
                </video>
                <img src={mobilePic}/>
            </div>
        </div>
    );
}
