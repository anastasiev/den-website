import React from 'react';
import Styles from './styles.scss';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

export default function AboutUs () {
    return (
        <div className = { Styles.AboutUs }>
            <span className = { Styles.MainTitle }>О нас</span>
            <div className = { Styles.AboutText }>
                <div className = { Styles.SectionContainer }>
                    <div className = { Styles.TextSection }>
                Наш опыт проведения LPG массажей на оригинальном оборудовании в устранении разных проблем эстетических недостатков тела
              (целлюлит, обьемы, отечность, дряблости кожи и др.)
              которые в 99% случаев успешно проводятся уже более 8 лет, только укрепляют нашу веру в силу природных ресурсов кожи.
                    </div>
                    <div className = { Styles.TextSection }>
              Гарантированные результаты.
              LPG Endermologie существует с 1986 года и является самой популярной косметологической и медицинской процедурой в коррекции фигуры.
                  Никаких побочных эффектов. Никаких рисков.
                    </div>
                </div>
                <h3>Сегодня Вы можете сделать LPG массаж на Оболоне и Виноградаре, получив комплексную услугу в виде бонусов: </h3>
                <div className = { Styles.AdvantageContainer }>
                    <div className = { Styles.Advantage }>
                        <img src = { img1 } />
                        <span>{ 'Бесплатную консультацию специалиста и диетолога' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                      <img src = { img2 } />
                      <span>{ 'Дополнение специальных бандажей во время процедуры' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                      <img src = { img3 } />
                      <span>{ 'Использование профессиональной косметики LPG (космоцефтика)' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                      <img src = { img4 } />
                      <span>{ 'Бонусный массаж лица на аппарате LPG' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                      <img src = { img5 } />
                      <span>{ 'Скидку 10% на полноценный курс процедур' }</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
