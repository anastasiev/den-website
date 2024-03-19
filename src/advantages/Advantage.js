import React from 'react';
import './styles.css';

export default function Advantage ({ text, icon}) {
    return (
        <div className = {"Advantage"}>
            <span>{ text }</span>
            <img src = { icon } />
        </div>
    );
}
