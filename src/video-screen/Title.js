import React from 'react';
import './styles.css';
import ModalButton from '../shared/modal-button';

export default function Title () {
    return (
        <div className = { "VideoTitle" }>
            <h1 className = { "VideoTextContainer" }>
                <span>LPG Масаж </span><br />
              Правильна звичка для твого способу життя
            </h1>
            <div className = { "VideoSmallText" }>
              Зробити LPG масаж на Оболоні оригінальним обладнанням, це ефективно і безболісно, тому що з Вами працюють справжні професіонали з великим досвідом, застосовуючи індивідуальний підхід до кожного клієнта! LPG 7-го покоління не має протипоказань, призначений для зменшення об'єму, целюліту, набряклості та покращення якості шкіри.             </div>
            <ModalButton btnText = 'Отримати консультацію' className = { "VideoModalButton" } />
        </div>
    );
}
