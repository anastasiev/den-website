import React from 'react';
import Styles from './styles.scss';
import logo from "../assets/geelux_logo.png";
import Social from "../header/Socials";


export default function Footer () {
    return (
        <div className = { Styles.Footer }>
          <img className = { Styles.Logo } src = { logo } />
          <span>© Cтудия GeeLux. It`s Time to Shine!</span>
          <Social />
        </div>
    );
}
