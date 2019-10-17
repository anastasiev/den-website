import React from 'react';
import Styles from './styles.scss';
import Advantage from './Advantage';
import ModalButton from '../shared/modal-button';

export default function Advantages () {
    return (
        <div className = { Styles.Advantages }>
            <span className = { Styles.MainTitle }>Преимущества</span>
            <div className = { Styles.Container }>
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild6230-3039-4032-b833-613037633363/photo521781313679770.jpg' }
                    text = { `Icoone®Laser - мировая новинка в области аппаратной косметологии. Результат достигается уже после первой процедуры и сохраняется надолго.` }
                />
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild3331-3133-4264-b161-363563366132/photo521780484751082.jpg' }
                    text = { `Icoone®Laser процедура, которая убирает отеки, синяки и гематомы и ускоряет заживление после пластических операций.` }
                />
            </div>
            <div className = { Styles.Container }>
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild6435-3930-4536-a635-663432306363/photo521762140086767.jpg' }
                    text = { `Icoone®Laser ускоряет выведение жировых отложений после инъекционных процедур (мезотерапии и липолитиков), лазерной липосакции и криолиполиза. Можно воздействовать даже на самые сложнодоступные места.` }
                />
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild6538-3231-4635-b333-343630333230/photo521762140086767.jpg' }
                    text = { `Icoone®Laser - это безопасное и безболезненное воздействие на жировую ткань. По ощущениям напоминает чувство приятного легкого тепла в зоне контакта.` }
                />
            </div>
            <div className = { Styles.Container }>
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild3031-3036-4837-a237-643266666238/photo521762140086767.jpg' }
                    text = { `Мы используем только самые передовые технологии для моделирования контуров тела и процедур омоложения кожи. Все услуги сертифицированы согласно украинского законодательства.` }
                />
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild3435-6266-4862-a237-653064303161/photo521762140086767.jpg' }
                    text = { `Аппарат Icoone®Laser - это деликатное воздействие с минимальными усилиями для максимального результата!` }
                />
            </div>
            <div className = { Styles.Container }>
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild6534-3331-4334-b638-396638303434/photo521781313679770.jpg' }
                    text = { `Мы используем только самые передовые технологии для моделирования контуров тела и процедур омоложения кожи. Все услуги сертифицированы согласно украинского законодательства.` }
                />
                <Advantage
                    icon = { 'https://static.tildacdn.com/tild3435-6266-4862-a237-653064303161/photo521762140086767.jpg' }
                    text = { `Аппарат Icoone®Laser - это деликатное воздействие с минимальными усилиями для максимального результата!` }
                />
            </div>
            <ModalButton btnText = 'Получить консультацию' className = { Styles.ModalButton } />
        </div>
    );
}
