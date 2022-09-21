import React from 'react';

import logoFooter from '../../assets/img/logo-footer.svg';

export default function Footer() {
  return (
    <footer className="section-h-trigger footer" data-section-trigger="dark">
      <a href="#" className="footer-logo">
        <img src={logoFooter} alt="" />
      </a>
      <div className="container">
        <div className="footer-row">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">
                  PEROLA SKY, UNIPESSOAL LDA <br />
                  Rua Conego Maio. 115 r/c Loja <br />C Sao Bernardo, portugal
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="tel:+7 999 224 71 23"> +7 999 224 71 23 </a>
              </li>
              <li>
                <a href="#"> sales@perola.aero </a>
              </li>
              <li>
                <a href="#">telegram</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#"> политика конфиденциальности </a>
        <a href="#"> правила использования </a>
      </div>
    </footer>
  );
}
