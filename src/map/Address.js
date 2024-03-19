import React from 'react';
import './styles.css';
import Social from '../header/Socials';

export default function Address () {
    return (
        <div className = { "Address" }>
            <span className={"AddressTitle"}>Контакты</span>
            <span className={"AddressSubtitle"}>Киев ул. Калнышевского 7 , мед.центр - “IGMA”</span>
            <span className={"AddressSubtitle"}>+380680355335</span>
            <span className={"AddressSubtitle"}>+380638743534</span>
            <span className={"AddressSubtitle"}>+380637765961</span>
            <div className = { "SocialContainer" }>
            <Social className={"WhiteSocial"}/>
            </div>
        </div>
    );
}
