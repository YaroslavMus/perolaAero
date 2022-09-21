import React from 'react';

import logoImg from '../../assets/img/Slice 1.svg';
import logoText from '../../assets/img/logo-text.svg';

export default function HeaderLogo() {
  return (
    <div className="logo">
      <a href="/" className="back-link">
        <img className="logo-img" src={logoImg} alt="" />
        <div className="logo-text">
          <img src={logoText} alt="" />
        </div>
      </a>
    </div>
  );
}
