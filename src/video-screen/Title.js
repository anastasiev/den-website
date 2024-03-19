import React from 'react';
import './styles.css';
import ModalButton from '../shared/modal-button';

export default function Title () {
    return (
        <div className = { "VideoTitle" }>
            <h1 className = { "VideoTextContainer" }>
                <span>LPG Массаж </span><br />
              Правильная привычка для твоего образа жизни
            </h1>
            <div className = { "VideoSmallText" }>
              Сделать LPG массаж на Оболони на  оригинальным оборудованием, это эффективно и безболезненно, потому что с Вами работают настоящие профессионалы с большим опытом применяя индивидуальный подход к каждому клиенту! LPG 7-го поколения не имеет противопоказаний, предназначенный для уменьшения объема, целлюлита, отечности и улучшения качества кожи.             </div>
            <ModalButton btnText = 'Получить консультацию' className = { "VideoModalButton" } />
        </div>
    );
}
