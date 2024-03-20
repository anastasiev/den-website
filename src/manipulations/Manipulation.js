import React from 'react';
import './styles.css';

export default function Manipulation ({ title, subtitle, icon, opts = [], revers = false}) {
    return (
        <div className = { `Manipulation ${revers && "ManipulationReverse"}` }>
            <div className = { "ManipulationText" }>
                <span className = { "ManipulationTitle" }>{title}</span>
                <span className = { "ManipulationSubtitle" }>{subtitle}</span>
                <ul>
                    { opts.map((o, ind) => (<li className = { "ManipulationLi" } key = { `${title}_${ind}` }>{o}</li>)) }
                </ul>
            </div>
            <img className = { "ManipulationImg" } src = { icon } />
        </div>
    );
}
