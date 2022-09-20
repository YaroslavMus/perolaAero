import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

import close from '../assets/img/close.svg';
import stepBackMob from '../assets/img/step-back-mob.svg';
import modalLogo from '../assets/img/logo-footer.svg';

export default function Modal() {
  const closeModal = () => {
    $('.fixed-modal-overlay').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal-info-holder').css('display', 'block');
    $('.modal-thanks').css('display', 'none');
    gsap.to($('modal-steps'), {
      x: 0,
      duration: 0,
    });
  };
  return (
    <div className="modal">
      <div className="fixed-modal-close" onClick={closeModal}>
        <img src={close} alt="" />
      </div>
      <div className="step-back-mob">
        <img src={stepBackMob} alt="" />
      </div>
      <div className="modal-inner">
        <div className="modal-logo">
          <img src={modalLogo} alt="" />
        </div>
        <div className="modal-steps">
          <div className="modal-step">
            <div className="modal-core">
              <form>
                <div className="modal-left">
                  <div className="modal-booking-line-holder">
                    <div className="modal-order-inputs-holder">
                      <div className="modal-order-inputs" data-booking-index="0">
                        <div className="modal-order-input modal-order-input-from">
                          <div className="modal-order-input-title">откуда</div>
                          <div className="modal-order-input-core">
                            <input type="text" className="autocomplete-from" />
                            <div className="input-direction-change">
                              <img src="./img/direction-change.svg" alt="" />
                              <img
                                src="./img/direction-change-v.svg"
                                alt=""
                                className="input-direction-change-mob"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-order-input modal-order-input-to">
                          <div className="modal-order-input-title">КУДА</div>
                          <div className="modal-order-input-core">
                            <input type="text" className="autocomplete-to" />
                          </div>
                        </div>
                        <div className="modal-order-date">
                          <div className="modal-order-input">
                            <div className="modal-order-input-title">КОГДА</div>
                            <div className="modal-order-input-core icon-date">
                              <input
                                type="text"
                                className="input-calendar"
                                data-input-calendar-type="departure"
                                defaultValue="20.06.2021"
                              />
                            </div>
                          </div>
                          <div className="modal-order-input">
                            <div className="modal-order-input-title">обратно</div>
                            <div className="modal-order-input-core">
                              <input
                                type="text"
                                className="input-calendar"
                                data-input-calendar-type="arrival"
                                defaultValue="20.06.2021"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="
                              modal-order-input
                              modal-order-input-count
                              modal-o-i-c-full
                            ">
                          <div className="modal-order-input-title">количество пассажиров</div>
                          <div className="modal-order-input-core">
                            <input type="text" defaultValue="2 пассажира" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-booking-line-holder">
                    <div className="modal-booking-remove">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.5126 11.9041L8.86927 10.2608L9.57214 9.55793L11.2155 11.2012L12.8588 9.55793L13.621 10.3202L11.9777 11.9635L13.621 13.6068L12.9182 14.3097L11.2748 12.6664L9.63153 14.3097L8.86927 13.5474L10.5126 11.9041Z"
                          fill="white"
                        />
                        <circle
                          cx="11.3137"
                          cy="12"
                          r="7.5"
                          transform="rotate(-45 11.3137 12)"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div className="modal-order-inputs-holder">
                      <div className="modal-order-inputs" data-booking-index="0">
                        <div className="modal-order-input modal-order-input-from">
                          <div className="modal-order-input-core">
                            <input type="text" className="autocomplete-from" placeholder="Откуда" />
                            <div className="input-direction-change">
                              <img src="./img/direction-change.svg" alt="" />
                              <img
                                src="./img/direction-change-v.svg"
                                alt=""
                                className="input-direction-change-mob"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-order-input modal-order-input-to">
                          <div className="modal-order-input-core">
                            <input type="text" className="autocomplete-to" placeholder="Куда" />
                          </div>
                        </div>
                        <div className="modal-order-date">
                          <div className="modal-order-input">
                            <div className="modal-order-input-core icon-date">
                              <input
                                type="text"
                                className="input-calendar"
                                data-input-calendar-type="departure"
                                defaultValue="20.06.2021"
                              />
                            </div>
                          </div>
                          <div className="modal-order-input">
                            <div className="modal-order-input-core">
                              <input
                                type="text"
                                className="input-calendar"
                                data-input-calendar-type="arrival"
                                defaultValue="20.06.2021"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-order-input modal-order-input-count">
                          <div className="modal-order-input-core">
                            <input type="text" defaultValue="2 пассажира" />
                          </div>
                        </div>
                        <div className="modal-order-input modal-order-input-submit">
                          <a href="#" className="btn-modal-mob">
                            отправить
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-booking-add">
                    добавить перелет
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.50158 7.366V5.042H8.49558V7.366H10.8196V8.444H8.49558V10.768H7.50158V8.444H5.17758V7.366H7.50158Z"
                        fill="white"
                      />
                      <circle cx="8" cy="8" r="7.5" stroke="white" />
                    </svg>
                  </div>
                </div>
                <div className="modal-right">
                  <input type="submit" className="submit-btn" defaultValue="отправить" />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-step">
            <div className="modal-info-holder">
              <div className="step-back">
                <img src="./img/step-img.svg" alt="" />
                <div className="step-back-text">НАЗАД</div>
              </div>
              <div className="modal-info">
                <div className="modal-info-left">
                  <div className="modal-info-left-holder">
                    <div className="swiper-container info-swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="modal-info-title">ИНформация о перелете 1</div>

                          <div className="modal-info-list">
                            <div>Шереметьево (SVO)</div>
                            <div>Ницца (NCE)</div>
                          </div>

                          <div className="modal-info-bottom">
                            <div className="modal-info-date">20.06.2021</div>
                            <div className="modal-info-count">2 пассажира</div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="modal-info-title">ИНформация о перелете 2</div>

                          <div className="modal-info-list">
                            <div>Шереметьево (SVO)</div>
                            <div>Ницца (NCE)</div>
                          </div>

                          <div className="modal-info-bottom">
                            <div className="modal-info-date">20.06.2021</div>
                            <div className="modal-info-count">2 пассажира</div>
                          </div>
                        </div>
                      </div>
                      <div className="info-btns-holder">
                        <div className="info-button-prev">
                          <img src="./img/left-info.svg" alt="" />
                        </div>
                        <div className="info-button-next">
                          <img src="./img/right-info.svg" alt="" />
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
                      <textarea placeholder="Комментарий"></textarea>
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
                      <span className="checkbox-view"></span>Я принимаю условия Политики
                      конфиденциальности
                    </label>
                  </div>
                </div>
                <div>
                  <input type="submit" className="modal-info-btn" />
                </div>
              </div>
            </div>
            <div className="modal-thanks">
              <div className="modal-thanks-img">
                <img src="./img/thanks-check.svg" alt="" />
              </div>
              <div className="modal-thanks-text">
                Благодарим за доверие! Мы свяжемся с вами <br />
                для обсуждения деталей полета.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
