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
            <h2 className = { "ManipulationMainTitle" }>Процедури</h2>
            <Manipulation
                icon = {pic2}
                opts = { [
                  'Зменшення жирових відкладень',
                  'Лікування целюліту',
                  'Дренаж всього тіла, зменшення набряклості',
                  'Підвищення пружності та якості шкіри',
                  'Моделювання силуету',
                  'Тривалість 50хв'
                ] }
                subtitle = 'Повний догляд або Зони на вибір'
                title = 'LPG ТІЛО'
            />
            <Manipulation
                revers
                icon = {pic3}
                opts = { [
                  'Синтез колагену, еластину, гіалуронової кислоти',
                  'Насичення шкіри киснем',
                  'Заповнення мімічних зморшок',
                  'Стимуляція лімфотоку',
                  'Зменшує прояв темних кіл під очима',
                  'Поліпшення метаболізму клітин шкіри',
                  'Моделювання овалу обличчя',
                  'Декольте та бюст',
                  'Тривалість 40 хв'
                ] }
                subtitle = 'ANTI-AGE, DETOX, ЛІФТИНГ'
                title = 'LPG ОБЛИЧЧЯ'
            />
            <Manipulation
                icon = {pic4}
                opts = { [
                  "Зняття м'язової напруги",
                  'Поліпшення трофіки',
                  'Лікування розтягувань',
                  "Відновлення м'язової системи",
                  'Активізація лімфатичної системи',
                  'Прискорення метаболізму та обмінних процесів',
                  'Харчування клітин киснем.Оксигенація тканин',
                  'Нейро-сенсорна дія',
                  'Ефект легких ніг',
                  'Тривалість 45 хв'
                ] }
                subtitle = ''
                title = 'LPG ТЕРАПІЯ І СПОРТ'
            />
            <ModalButton btnText = 'Отримати консультацію' className = { "ManipulationModalButton" }  />
        </div>
    );
}
