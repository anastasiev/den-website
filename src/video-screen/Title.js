import React from 'react';
import Styles from './styles.scss';
import ModalButton from '../shared/modal-button';

export default function Title () {
    return (
        <div className = { Styles.Title }>
            <div className = { Styles.TextContainer }>
                <span>Обнови себя</span><br />
        в одно касание
            </div>
            <div className = { Styles.SmallText }>
        Процедуры Icoone®Laser являются безболезненными, неинвазивными и физиологическими манипуляциями, не требующие периода реабилитации, предназначенные для всех типов кожи и участков тела, также могут проводиться на ежедневной основе.<br /><br />Аппарат Icoone®Laser - это деликатное воздействие с минимальными усилиями для максимального результата!
            </div>
            <ModalButton btnText = 'Получить консультацию' className = { Styles.ModalButton } />
        </div>
    );
}
