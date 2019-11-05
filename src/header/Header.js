import React from 'react';
import Styles from './styles.scss';
import logo from '../assets/logo.jpg';
import Navbar from './Navbar';
import Numbers from './Numbers';
import Social from './Socials';

export default function Header () {
    return (
        <div className = { Styles.Header }>
            <img className = { Styles.Logo } src = { logo } />
            <Navbar />
            <Numbers />
            <div className = { Styles.SocialContainer }>
                <Social />
            </div>
        </div>
    );
}
