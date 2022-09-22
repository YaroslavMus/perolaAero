import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

export default function ModalBtn() {
  const modalSteps = (e) => {
    e.preventDefault();
    let modalStepWidth = $('.modal-step').innerWidth();
    $('.modal-nav').css({ opacity: 0, display: 'none' });
    gsap.to($('.modal-steps'), {
      x: -modalStepWidth,
      duration: 0.5,
    });
    $('.step-back-mob').addClass('active');
  };
  return (
    <div className="modal-btn">
      <button className="submit-btn" defaultValue="Далее" onClick={modalSteps}>
        Далее
      </button>
    </div>
  );
}
