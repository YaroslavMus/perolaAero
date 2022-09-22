import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

import close from '../../assets/img/close.svg';

export default function FixedClose() {
  const closeModal = () => {
    $('.fixed-modal-overlay').removeClass('active');
    $('.modal').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.modal-info-holder').css('display', 'block');
    $('.modal-thanks').css('display', 'none');
    gsap.to($('modal-steps'), {
      x: 0,
      duration: 0,
    });
  };
  return (
    <div className="fixed-modal-close" onClick={closeModal}>
      <img src={close} alt="" />
    </div>
  );
}
