import React from 'react';
import Styles from './styles.scss';
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
        <div className = { Styles.Advantages }>
            <h2 className = { Styles.MainTitle }>Преимущества</h2>
            <div className = { Styles.Container }>
                <Advantage
                  icon = {pic5}
                  text = { `Безопасность - Минимум противопоказаний, стимуляция физиологических процессов организма,исключительно биологическая стимуляция!` }
                />
                <Advantage
                  icon = {pic6}
                  text = { `Опыт - Практический опыт наших мастеров это 8000+ процедур LPG и 1000+ довольных клиентов!` }
                />
            </div>
            <div className = { Styles.Container }>
                <Advantage
                  icon = {pic7}
                  text = { `Результативность - Как правило хороший результат достигается в 99% случаев.` }
                />
                <Advantage
                  icon = {pic8}
                  text = { `Безболезненность - Процедура безболезненна, комфортна но ощутима, что повышает эффект от массажа, так как отсутствует выброс стрессовых гормонов.` }
                />
            </div>
            <div className = { Styles.Container }>
                <Advantage
                  icon = {pic10}
                  text = { `Гибкость - Возможность решения одновременно нескольких задач, например: уменьшение объема, уменьшение отечности и улучшение качества кожи.` }
                />
              <Advantage
                icon = {pic11}
                text = { `Бонусы к процедуре - Использование специальных бандажей(резинок), экспресс процедуры на лицо, профессиональная космецевтика LPG, консультация диетолога и др.` }
              />
            </div>
            <ModalButton btnText = 'Получить консультацию' className = { Styles.ModalButton } />
        </div>
    );
}
