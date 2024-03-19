import React from 'react';
import './styles.css';

export default function Price ({ price, title, additional, openDialog, currency }) {
    return (
        <div className = { "Price" }>
            <span className = { "Amount" }>{`${price} ${currency ? currency : 'грн'}`}</span>
            <span className = { "Text" }>{title}</span>
            { additional && <span className = { "Text" }>{additional}</span> }
            <button onClick = { openDialog }>Записаться</button>
        </div>
    );
}
