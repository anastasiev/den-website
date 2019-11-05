import React from 'react';
import Styles from './styles.scss';
import logo from "../assets/logo.jpg";
import Social from "../header/Socials";


export default function Footer () {
    return (
        <div className = { Styles.Footer }>
          <img className = { Styles.Logo } src = { logo } />
          <span>© LPG - Правильная привычка для твоего образа жизни</span>
          <Social />
        </div>
    );
}
