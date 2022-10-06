import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

import close from '../../assets/img/close.svg';

export default function FixedClose() {
  const closeModal = () => {
    gsap.to($('.modal-steps'), {
      x: 0,
      duration: 0.5,
    });
    $('.fixed-modal-overlay').removeClass('active');
    $('.modal').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.modal-info-holder').css('display', 'block');
    $('.modal-thanks').css('display', 'none');
    $('.modal').css({ overflowY: 'inherit' });
  };
  return (
    <div className="fixed-modal-close" onClick={closeModal}>
      <img src={close} alt="" />
    </div>
  );
}
