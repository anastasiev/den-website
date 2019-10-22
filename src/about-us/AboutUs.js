import React from 'react';
import Styles from './styles.scss';

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
                        <img src = { 'https://static.tildacdn.com/tild6538-3231-4635-b333-343630333230/photo521762140086767.jpg' } />
                        <span>{ 'Бесплатную консультацию специалиста и диетолога' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                        <img src = { 'https://static.tildacdn.com/tild3435-6266-4862-a237-653064303161/photo521762140086767.jpg' } />
                        <span>{ 'Дополнение специальных бандажей во время процедуры' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                        <img src = { 'https://static.tildacdn.com/tild6230-3039-4032-b833-613037633363/photo521781313679770.jpg' } />
                        <span>{ 'Использование профессиональной косметики LPG (космоцефтика)' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                        <img src = { 'https://static.tildacdn.com/tild3331-3133-4264-b161-363563366132/photo521780484751082.jpg' } />
                        <span>{ 'Бонусный массаж лица на аппарате LPG' }</span>
                    </div>
                    <div className = { Styles.Advantage }>
                        <img src = { 'https://static.tildacdn.com/tild6534-3331-4334-b638-396638303434/photo521781313679770.jpg' } />
                        <span>{ 'Скидку 10% на полноценный курс процедур' }</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
