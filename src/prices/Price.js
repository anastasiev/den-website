import React from 'react';
import Styles from './styles.scss';

export default function Price ({ price, title, duration, additional, openDialog }) {
    return (
        <div className = { Styles.Price }>
            <span className = { Styles.Amount }>{`${price} грн`}</span>
            <span className = { Styles.Text }>{title}</span>
            { additional && <span className = { Styles.Text }>{additional}</span> }
            <span className = { Styles.Text }>{`${duration} минут`}</span>
            <button onClick = { openDialog }>Записаться</button>
        </div>
    );
}
