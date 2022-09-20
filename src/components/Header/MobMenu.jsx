import React from 'react';

import mobClose from '../../assets/img/mob-close.svg';
import logo from '../../assets/img/logo-footer.svg';

export default function MobMenu() {
  return (
    <div className="mob-menu">
      <div className="mob-menu-close">
        <img src={mobClose} alt="" />
      </div>
      <div className="mob-menu-logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="mob-menu-list">
        <li>
          <a href="#"> доставка </a>
        </li>
        <li>
          <a href="#"> сопровождение </a>
        </li>
        <li>
          <a href="#"> стоимость </a>
        </li>
        <li>
          <a href="#"> контакты </a>
        </li>
      </ul>
      <ul className="mob-menu-contacts">
        <li>
          <a href="#">+7 999 224 71 23</a>
        </li>
        <li>
          <a href="#">SALES@PEROLA.AERO</a>
        </li>
        <li>
          <a href="#">
            <img src="./img/telegram.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
