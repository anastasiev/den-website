import React from 'react';
import Styles from './styles.scss';

export default function Navbar () {
  return (
    <div className={Styles.Navbar}>
      <a href="#procedure">Процедуры</a>
      <a href="#price">Цены</a>
      <a href="#cert">Сертификаты</a>
      <a href="#advant">Преимущества</a>
      <a href="#discount">Акции</a>
      <a href="#contact">Контакты</a>
    </div>
  );
}
