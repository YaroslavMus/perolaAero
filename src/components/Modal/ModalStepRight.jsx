import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';
import {currentLanguage} from '../Config';

import ModalThanks from './ModalThanks';

export default function ModalStepRight({frontData}) {
  const modalThanks = (e) => {
    e.preventDefault();
    $('.step-back-mob').removeClass('active');
    $('.modal-info-holder').fadeOut(200);
    $('.modal-thanks').fadeIn(200);
    $('.modal').css({ overflowY: 'inherit' });
    gsap.to($('modal-steps'), {
      x: 0,
      duration: 0,
    });
  };

  let personal = '';

  if( currentLanguage === 'ru' ) {
    personal = <div className="form-line form-line-checkbox">
                <label>
                  <input type="checkbox" className="checkbox-core" />
                  <span className="checkbox-view"></span>{frontData.site_modal_personal}
                </label>
              </div>;
  }
  return (
    <div className="modal-step">
      <div className="modal-info-holder">
        <div className="modal-info">
          <div className="modal-info-left">
            <div className="modal-info-left-holder">
              <div className="swiper-container info-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="modal-info-title">{frontData.site_modal_delivery_info}</div>
                    <div className="modal-info-list">
                      <div>Шереметьево (SVO)</div>
                      <div>Ницца (NCE)</div>
                    </div>
                    <div className="modal-info-bottom">
                      <div className="modal-info-date">20.06.2021</div>
                      <div className="modal-info-count">{frontData.site_modal_delivery_name}</div>
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
                <input type="text" placeholder={frontData.site_modal_form_name} />
              </div>
              <div>
                <input type="text" placeholder={frontData.site_modal_form_phone} />
              </div>
              <div>
                <input type="text" placeholder={frontData.site_modal_form_email} />
              </div>
              <div>
                <textarea
                  placeholder={frontData.site_modal_form_comment}></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-info-bottom-2">
          <div>
            <div className="form-line form-line-checkbox">
              <label>
                <input type="checkbox" className="checkbox-core" />
                <span className="checkbox-view"></span>{frontData.site_modal_policy}
              </label>
            </div>
            {personal}
          </div>
          <div>
            <input type="submit" className="modal-info-btn" onClick={modalThanks} />
          </div>
        </div>
      </div>
      <ModalThanks frontData={frontData} />
    </div>
  );
}
