import React from 'react';

import Styles from './styles.scss';

import Title from './Title';

import video from '../assets/video1.webm';

export default function VideoScreen () {
    return (
        <div className = { Styles.VideoScreen }>
            <Title />
            <div className = { Styles.VideoContainer }>
                <video autoPlay loop muted name = 'media'>
                    <source
                        src = { video }
                        type = 'video/webm'
                    />
                </video>
            </div>
        </div>
    );
}
