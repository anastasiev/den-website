import React from 'react';
import './styles.css';
import ModalButton from "../shared/modal-button";

export default function Sales () {
    return (
        <div className = { "Sales" }>
            <span className = { "MainTitle" }>
            Акции
            </span>
            <span className = { "Subtitle" }>Придбати курс і отримай приємний і значущий для себе ПОДАРУНОК</span>
            <div className = { "SalesContainer" } >
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
            </div>
          <ModalButton btnText = 'Отримати консультацію' className = { "ModalButton" } />
        </div>
    );
}
