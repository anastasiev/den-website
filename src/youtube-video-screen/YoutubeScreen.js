import React, { useState } from 'react';
import './styles.css';
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
        <div className = { "YoutubeScreen" }>
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
            {showPlay && <img className = { "Play" } src = { play } onClick = { playClick} />}
        </div>
    );
}
