import React from 'react';
import Styles from './styles.scss';
import Price from './Price';

export default function Prices () {
    return (
        <div className = { Styles.Prices }>
            <span className = { Styles.MainTitle }>Цены</span>
            <div className = { Styles.PriceContainer }>
                <Price
                    duration = { 20 }
                    price = { 700 }
                    title = 'Базовая процедура'
                />
                <Price
                    duration = { 20 }
                    price = { 600 }
                    title = 'Сеанс по лицу'
                />
            </div>
            <div className = { Styles.PriceContainer }>
                <Price
                    additional = '+ на выбор 1 дополнительная зона'
                    duration = { 30 }
                    price = { 850 }
                    title = 'Базовая процедура'
                />
                <Price
                    additional = '+ на выбор 2 дополнительных зоны'
                    duration = { 40 }
                    price = { 1000 }
                    title = 'Базовая процедура'
                />
            </div>
            <div className = { Styles.PriceContainer }>
                <Price
                    additional = '+ на выбор 3 дополнительных зоны'
                    duration = { 50 }
                    price = { 1150 }
                    title = 'Базовая процедура'
                />
                <Price
                    additional = '+ на выбор 4 дополнительных зоны'
                    duration = { 60 }
                    price = { 1300 }
                    title = 'Базовая процедура'
                />
            </div>
        </div>
    );
}
