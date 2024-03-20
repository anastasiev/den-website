import React from 'react';
import './styles.css';
import Social from '../header/Socials';

export default function Address () {
    return (
        <div className = { "Address" }>
            <span className={"AddressTitle"}>Контакти</span>
            <span className={"AddressSubtitle"}>Київ вул. Калнишевського 7 , мед.центр - “IGMA”</span>
            <span className={"AddressSubtitle"}>+380680355335</span>
            <div className = { "SocialContainer" }>
            <Social className={"WhiteSocial"}/>
            </div>
        </div>
    );
}
