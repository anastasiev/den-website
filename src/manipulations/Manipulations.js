import React from 'react';
import './styles.css';
import Manipulation from './Manipulation';
import ModalButton from '../shared/modal-button';

import pic2 from '../assets/Picture2.png';
import pic3 from '../assets/Picture3.png';
import pic4 from '../assets/Picture4.png';


export default function Manipulations () {
    return (
        <div className = { "Manipulations" }>
            <h2 className = { "ManipulationMainTitle" }>Процедуры</h2>
            <Manipulation
                icon = {pic2}
                opts = { [
                    'Уменьшение жировых отложений',
                    'Лечение целлюлита',
                    'Дренаж всего тела, уменьшение отечности',
                    'Повышение упругости и качества кожи',
                    'Моделирование силуэта',
                    'Длительность 50мин'
                ] }
                subtitle = 'Полный уход или Зоны на выбор'
                title = 'LPG ТЕЛО'
            />
            <Manipulation
                revers
                icon = {pic3}
                opts = { [
                    'Синтез коллагена,эластина,гиалуроновой кислоты',
                    'Насыщение кожи кислородом',
                    'Заполнение мимических морщин',
                    'Стимуляция лимфотока',
                    'Уменьшает проявление темных кругов под глазами',
                    'Улучшение метаболизма клеток кожи',
                    'Моделирование овала лица',
                    'Декольте и бюст',
                    'Длительность 40 мин'
                ] }
                subtitle = 'ANTI-AGE, DETOX, ЛИФТИНГ'
                title = 'LPG ЛИЦО'
            />
            <Manipulation
                icon = {pic4}
                opts = { [
                    'Снятие мышечного напряжения',
                    'Улучшение трофики',
                    'Лечение растяжений',
                    'Восстановление мышечной системы',
                    'Активизация лимфатической системы',
                    'Ускорение метаболизма и обменных процессов',
                    'Питание клеток кислородом.Оксигенация тканей',
                    'Нейро-сенсорное воздействие',
                    'Эффект легких ног',
                    'Длительность 45 мин'
                ] }
                subtitle = ''
                title = 'LPG ТЕРАПИЯ И СПОРТ'
            />
            <ModalButton btnText = 'Получить консультацию' className = { "ManipulationModalButton" }  />
        </div>
    );
}
