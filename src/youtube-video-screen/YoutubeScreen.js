import React, { useState } from 'react';
import Styles from './styles.scss';
import video from '../assets/video_massage.mp4';
import play from '../assets/play.png';

export default function YoutubeScreen () {
    const [showPlay, setPlay] = useState(true);

    const vidRef = React.createRef();

    const playClick = () => {
        setPlay(false);
        vidRef.current.play();
    };

    return (
        <div className = { Styles.YoutubeScreen }>
            <video
                controls
                name = 'media'
                ref = { vidRef }
                onClick = { () => setPlay(false) }>
                <source
                    src = { video }
                    type = 'video/mp4'
                />
            </video>
            {showPlay && <img className = { Styles.Play } src = { play } onClick = { playClick} />}
        </div>
    );
}
