import React from 'react';
import './styles.css';
import Advantage from './Advantage';
import ModalButton from '../shared/modal-button';

import pic5 from '../assets/Picture5.png';
import pic6 from '../assets/Picture6.png';
import pic7 from '../assets/Picture7.png';
import pic8 from '../assets/Picture8.png';
import pic11 from '../assets/Picture11.png';
import pic10 from '../assets/Picture10.png';

export default function Advantages () {
    return (
        <div className = { "Advantages" }>
            <h2 className = { "AdvantageMainTitle" }>Переваги</h2>
            <div className = { "AdvantageContainer" }>
                <Advantage
                  icon = {pic5}
                  text = { `Безпека - Мінімум протипоказань, стимуляція фізіологічних процесів організму, винятково біологічна стимуляція!` }
                />
                <Advantage
                  icon = {pic6}
                  text = { `Досвід - Практичний досвід наших майстрів це 8000+ процедур LPG та 1000+ задоволених клієнтів!` }
                />
            </div>
            <div className = { "AdvantageContainer" }>
                <Advantage
                  icon = {pic7}
                  text = { `Результативність - Як правило, хороший результат досягається в 99% випадків.` }
                />
                <Advantage
                  icon = {pic8}
                  text = { `Безболісність - Процедура безболісна, комфортна, але відчутна, що підвищує ефект від масажу, оскільки відсутня викид стресових гормонів.` }
                />
            </div>
            <div className = { "AdvantageContainer" }>
                <Advantage
                  icon = {pic10}
                  text = { `Гнучкість - Можливість вирішення одночасно кількох завдань, наприклад: зменшення об'єму, зменшення набряклості та покращення якості шкіри.` }
                />
              <Advantage
                icon = {pic11}
                text = { `Бонуси до процедури - Використання спеціальних бандажів (гумок), експрес процедури в наявності, професійна космецевтика LPG, консультація дієтолога та ін.` }
              />
            </div>
            <ModalButton btnText = 'Отримати консультацію' className = { "AdvantageModalButton" } />
        </div>
    );
}
