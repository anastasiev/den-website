import React from 'react';
import Styles from './styles.scss';

export default function DoublePrice ({ title, once, complex, openDialog }) {
    return (
        <div className = { Styles.Price }>
            <span className = { Styles.Amount }>{title}</span>
            <span className = { Styles.Text }>{once}</span>
            <span className = { Styles.Text }>{complex}</span>
            <button onClick = { openDialog }>Записаться</button>
        </div>
    );
}
