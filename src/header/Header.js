import React from 'react';
import './styles.css';
import logo from '../assets/new_logo.jpg';
import Navbar from './Navbar';
import Numbers from './Numbers';
import Social from './Socials';

export default function Header () {
    return (
        <div className = { "Header" }>
            <img className = { "HeaderLogo" } src = { logo } />
            <Navbar />
            <Numbers />
            <div className = { "HeaderSocialContainer" }>
                <Social />
            </div>
        </div>
    );
}
