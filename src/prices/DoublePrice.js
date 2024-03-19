import React from 'react';
import './styles.css';

export default function DoublePrice ({ title, once, complex, openDialog }) {
    return (
        <div className = { "Price" }>
            <span className = { "Amount" }>{title}</span>
            <span className = { "Text" }>{once}</span>
            <span className = { "Text" }>{complex}</span>
            <button onClick = { openDialog }>Записаться</button>
        </div>
    );
}
