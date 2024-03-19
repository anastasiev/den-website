import React from 'react';

import './styles.css';

import Title from './Title';

import video from '../assets/video_massage_720_cut.mp4';
import mobilePic from '../assets/Picture4.png';

export default function VideoScreen () {
    return (
        <div className = { "VideoScreen" }>
            <Title />
            <div className = { "VideoContainer" }>
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
