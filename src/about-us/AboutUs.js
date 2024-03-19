import React from 'react';
import './styles.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

export default function AboutUs () {
    return (
        <div className = { "AboutUs" }>
            <h2 className = { "MainTitle" }>О нас</h2>
            <div className = { "AboutText" }>
                <div className = { "SectionContainer" }>
                    <div className = { "TextSection" }>
                Наш опыт проведения LPG массажей на оригинальном оборудовании в устранении разных проблем эстетических недостатков тела
              (целлюлит, обьемы, отечность, дряблости кожи и др.)
              которые в 99% случаев успешно проводятся уже более 8 лет, только укрепляют нашу веру в силу природных ресурсов кожи.
                    </div>
                    <div className = { "TextSection" }>
              Гарантированные результаты.
              LPG Endermologie существует с 1986 года и является самой популярной косметологической и медицинской процедурой в коррекции фигуры.
                  Никаких побочных эффектов. Никаких рисков.
                    </div>
                </div>
                <h3>Сегодня Вы можете сделать LPG массаж на Оболоне и Виноградаре, получив комплексную услугу в виде бонусов: </h3>
                <div className = { "AdvantageContainer" }>
                    <div className = { "Advantage" }>
                        <img src = { img1 } />
                        <span>{ 'Бесплатную консультацию специалиста и диетолога' }</span>
                    </div>
                    <div className = { "Advantage" }>
                      <img src = { img2 } />
                      <span>{ 'Дополнение специальных бандажей во время процедуры' }</span>
                    </div>
                    <div className = { "Advantage" }>
                      <img src = { img3 } />
                      <span>{ 'Использование профессиональной косметики LPG' }</span>
                    </div>
                    <div className = { "Advantage" }>
                      <img src = { img4 } />
                      <span>{ 'Бонусный массаж лица на аппарате LPG' }</span>
                    </div>
                    <div className = { "Advantage" }>
                      <img src = { img5 } />
                      <span>{ 'Скидку 10% на полноценный курс процедур' }</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
