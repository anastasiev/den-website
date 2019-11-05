import React from 'react';
import Styles from './styles.scss';

export default function Price ({ price, title, additional, openDialog, currency }) {
    return (
        <div className = { Styles.Price }>
            <span className = { Styles.Amount }>{`${price} ${currency ? currency : 'грн'}`}</span>
            <span className = { Styles.Text }>{title}</span>
            { additional && <span className = { Styles.Text }>{additional}</span> }
            <button onClick = { openDialog }>Записаться</button>
        </div>
    );
}
