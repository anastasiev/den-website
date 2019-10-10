import React from 'react';
import Styles from './styles.scss';

export default function Manipulation ({ title, subtitle, icon, opts = [], revers = false}) {
    return (
        <div className = { `${Styles.Manipulation} ${revers && Styles.Reverse}` }>
            <div className = { Styles.Text }>
                <span className = { Styles.Title }>{title}</span>
                <span className = { Styles.Subtitle }>{subtitle}</span>
                <ul>
                    { opts.map((o, ind) => (<li key = { `${title}_${ind}` }>{o}</li>)) }
                </ul>
            </div>
            <img src = { icon } />
        </div>
    );
}
