import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

export default function ModalBtn() {
  const modalSteps = (e) => {
    e.preventDefault();
    let modalStepWidth = $('.modal-step').innerWidth();
    $('.modal').css({ overflowY: 'auto' });
    gsap.to($('.modal-steps'), {
      x: -modalStepWidth,
      duration: 0.5,
    });
    $('.step-back-mob').addClass('active');
    $('.on').addClass('active');
    $('.to').removeClass('active');
  };
  return (
    <div className="modal-btn">
      <button type="submit" className="submit-btn" defaultValue="Далее" onClick={modalSteps}>
        Далее
      </button>
    </div>
  );
}
