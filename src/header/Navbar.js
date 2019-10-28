import React from 'react';
import { SectionLink } from 'react-scroll-section';
import cx from 'classnames';

import Styles from './styles.scss';

const NavBarItem = ({ section, children, gg }) => (
    <SectionLink section = { section }>
        {(link) => (
            <a
                className = { cx(Styles.Link, { [Styles.SelectedLink]: link.isSelected }) }
                onClick = { link.onClick }>
                {children}
            </a>
        )}
    </SectionLink>
);

export default function Navbar () {
    return (
        <div className = { Styles.Navbar }>
            <NavBarItem section = 'procedure'>Процедуры</NavBarItem>
            <NavBarItem section = 'price'>Цены</NavBarItem>
            <NavBarItem section = 'discount'>Акции</NavBarItem>
            <NavBarItem section = 'advant'>Преимущества</NavBarItem>
            <NavBarItem section = 'about'>О нас</NavBarItem>
            <NavBarItem section = 'contact'>Контакты</NavBarItem>
        </div>
    );
}
