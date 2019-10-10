import React from 'react';
import Styles from './styles.scss';

export default function Advantage ({ text, icon}) {
    return (
        <div className = {Styles.Advantage}>
            <span>{ text }</span>
            <img src = { icon } />
        </div>
    );
}
