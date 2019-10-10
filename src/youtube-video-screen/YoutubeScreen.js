import React from 'react';
import Styles from './styles.scss';

export default function YoutubeScreen () {
    return (
        <div className = { Styles.YoutubeScreen }>
            <iframe
                allowFullScreen frameBorder = '0'
                height = '540px' src = '//www.youtube.com/embed/gAIrdv1k_UI?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0'
                width = '80%'></iframe>
        </div>
    );
}
