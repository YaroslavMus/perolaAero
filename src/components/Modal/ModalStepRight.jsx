import React from 'react';
import $ from 'jquery';

import ModalThanks from './ModalThanks';

export default function ModalStepRight() {
  const modalThanks = (e) => {
    e.preventDefault();
    $('.step-back-mob').removeClass('active');
    $('.modal-info-holder').fadeOut(200);
    $('.modal-thanks').fadeIn(200);
  };
  return (
    <div className="modal-step">
      <div className="modal-info-holder">
        <div className="modal-info">
          <div className="modal-info-left">
            <div className="modal-info-left-holder">
              <div className="swiper-container info-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="modal-info-title">ИНформация о доставке</div>
                    <div className="modal-info-list">
                      <div>Шереметьево (SVO)</div>
                      <div>Ницца (NCE)</div>
                    </div>
                    <div className="modal-info-bottom">
                      <div className="modal-info-date">20.06.2021</div>
                      <div className="modal-info-count">Доставка</div>
                      <div className="modal-info-count">От аэропорта до аэропорта</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-info-right">
            <form className="info-form">
              <div>
                <input type="text" placeholder="Имя" />
              </div>
              <div>
                <input type="text" placeholder="Телефон" />
              </div>
              <div>
                <input type="text" placeholder="E-mail" />
              </div>
              <div>
                <textarea
                  placeholder="Опишите содержание багажа, приблизительные габариты,
вес и количество мест"></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-info-bottom-2">
          <div>
            <div className="form-line form-line-checkbox">
              <label>
                <input type="checkbox" className="checkbox-core" />
                <span className="checkbox-view"></span>Я принимаю условия Политики
                конфиденциальности
              </label>
            </div>
            <div className="form-line form-line-checkbox">
              <label>
                <input type="checkbox" className="checkbox-core" />
                <span className="checkbox-view"></span>Я соглашаюсь на обработку персональных данных
              </label>
            </div>
          </div>
          <div>
            <input type="submit" className="modal-info-btn" onClick={modalThanks} />
          </div>
        </div>
      </div>
      <ModalThanks />
    </div>
  );
}
