import React from 'react';
import Styles from './styles.scss';
import Address from './Address';

export default function Map () {
    return (
        <div className = { Styles.Map }>
            <div className = { Styles.MapContainer }>
                <iframe
                    frameBorder = '0' height = '500' id = 'gmap_canvas'
                    marginHeight = '0' marginWidth = '0'
                    scrolling = 'no' src = 'https://maps.google.com/maps?q=beerwood&t=&z=13&ie=UTF8&iwloc=&output=embed' width = '100%'>
                </iframe>
            </div>
            <Address />
        </div>
    );
}
