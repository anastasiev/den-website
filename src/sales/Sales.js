import React from 'react';
import Styles from './styles.scss';
import ModalButton from "../shared/modal-button";

export default function Sales () {
    return (
        <div className = { Styles.Sales }>
            <span className = { Styles.MainTitle }>
            Акции
            </span>
            <span className = { Styles.Subtitle }>Приобрети курс и получи приятный и значимый для себя ПОДАРОК</span>
            <div className = { Styles.SalesContainer } >
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
                <img src = 'https://static.tildacdn.com/tild3732-6338-4430-b439-326533336666/photo.png' />
            </div>
          <ModalButton btnText = 'Получить консультацию' className = { Styles.ModalButton } />
        </div>
    );
}
