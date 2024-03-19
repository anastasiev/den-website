import React from 'react';
import './styles.css';
import logo from "../assets/new_logo.jpg";
import Social from "../header/Socials";


export default function Footer () {
    return (
        <div className = { "Footer" }>
          <img className = { "FooterLogo" } src = { logo } />
          <span>© LPG - Правильная привычка для твоего образа жизни</span>
          <Social />
        </div>
    );
}
