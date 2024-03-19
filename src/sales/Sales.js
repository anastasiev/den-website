import React from 'react';
import './styles.css';
import ModalButton from "../shared/modal-button";

export default function Sales () {
    return (
        <div className = { "Sales" }>
            <span className = { "MainTitle" }>
            Акции
            </span>
            <span className = { "Subtitle" }>Приобрети курс и получи приятный и значимый для себя ПОДАРОК</span>
            <div className = { "SalesContainer" } >
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
            </div>
          <ModalButton btnText = 'Получить консультацию' className = { "ModalButton" } />
        </div>
    );
}
