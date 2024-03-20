import React from 'react';
import './styles.css';

export default function Advantage ({ text, icon}) {
    return (
        <div className = {"Advantage"}>
            <span className = {"AdvantageSpan"}>{ text }</span>
            <img className = {"AdvantageImg"} src = { icon } />
        </div>
    );
}
