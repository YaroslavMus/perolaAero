import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

import stepBackMob from '../../assets/img/step-back-mob.svg';

export default function StepBack() {
  const stepBack = () => {
    gsap.to($('.modal-steps'), {
      x: 0,
      duration: 0.5,
    });
    $('.step-back-mob').removeClass('active');
    $('.modal-nav').css({ opacity: 1, display: 'flex' });
    $('.modal').css({ overflowY: 'inherit' });
  };
  return (
    <div className="step-back-mob" onClick={stepBack}>
      <img src={stepBackMob} alt="" />
    </div>
  );
}
