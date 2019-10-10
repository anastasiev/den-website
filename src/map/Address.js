import React from 'react';
import Styles from './styles.scss';
import Social from '../header/Socials';

export default function Address () {
    return (
        <div className = { Styles.Address }>
            <span className={Styles.AddressTitle}>Контакты</span>
            <span className={Styles.AddressSubtitle}>02140, Киев, пр-т. Николая Бажана 10А</span>
            <span className={Styles.AddressSubtitle}>+380980203030</span>
            <span className={Styles.AddressSubtitle}>+380980203030</span>
            <a href="mailto:GeeLuxspace@gmail.com">GeeLuxspace@gmail.com</a>
            <div className = { Styles.SocialContainer }>
            <Social />
            </div>
        </div>
    );
}
