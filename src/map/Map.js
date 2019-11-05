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
                    scrolling = 'no' src = 'https://maps.google.com/maps?q=%D0%9A%D0%B8%D0%B5%D0%B2%20%D1%83%D0%BB.%20%D0%9A%D0%B0%D0%BB%D0%BD%D1%8B%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%207%20%20&t=&z=13&ie=UTF8&iwloc=&output=embed' width = '100%'>
                </iframe>
            </div>
            <Address />
        </div>
    );
}