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
            <h2 className = { "AboutMainTitle" }>Про нас</h2>
            <div className = { "AboutText" }>
                <div className = { "AboutSectionContainer" }>
                    <div className = { "AboutTextSection" }>
                      Наш досвід проведення LPG масажів на оригінальному устаткуванні в усуненні різних проблем естетичних недоліків тіла
                      (целюліт, об'єми, набряклість, в'ялості шкіри та ін.)
                      які у 99% випадків успішно проводяться вже понад 8 років, лише зміцнюють нашу віру через природні ресурси шкіри.
                    </div>
                    <div className = { "AboutTextSection" }>
                      Гарантовані результати
                      LPG Endermologie існує з 1986 року і є найпопулярнішою косметологічною та медичною процедурою корекції фігури.
                      Жодних побічних ефектів. Жодних ризиків.
                    </div>
                </div>
                <h3>Сьогодні Ви можете зробити LPG масаж на Оболоні та Виноградарі, отримавши комплексну послугу у вигляді бонусів: </h3>
                <div className = { "AboutAdvantageContainer" }>
                    <div className = { "AboutAdvantage" }>
                        <img src = { img1 } />
                        <span>{ 'Безкоштовну консультацію фахівця та дієтолога' }</span>
                    </div>
                    <div className = { "AboutAdvantage" }>
                      <img src = { img2 } />
                      <span>{ 'Доповнення спеціальних бандажів під час процедури' }</span>
                    </div>
                    <div className = { "AboutAdvantage" }>
                      <img src = { img3 } />
                      <span>{ 'Використання професійної косметики LPG' }</span>
                    </div>
                    <div className = { "AboutAdvantage" }>
                      <img src = { img4 } />
                      <span>{ 'Бонусний масаж на LPG' }</span>
                    </div>
                    <div className = { "AboutAdvantage" }>
                      <img src = { img5 } />
                      <span>{ 'Знижку 10% на повноцінний курс процедур' }</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
