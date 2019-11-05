import React from 'react';
import Styles from './styles.scss';
import Social from '../header/Socials';

export default function Address () {
    return (
        <div className = { Styles.Address }>
            <span className={Styles.AddressTitle}>Контакты</span>
            <span className={Styles.AddressSubtitle}>Киев ул. Калнышевского 7 , мед.центр - “IGMA”</span>
            <span className={Styles.AddressSubtitle}>+380680355335</span>
            <div className = { Styles.SocialContainer }>
            <Social className={Styles.WhiteSocial}/>
            </div>
        </div>
    );
}
