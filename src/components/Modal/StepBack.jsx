import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

import stepBackMob from '../../assets/img/step-back-mob.svg';

export default function StepBack() {
  const stepBack = () => {
    $('.step-back-mob').removeClass('active');
    $('.modal-nav').css({ opacity: 1, display: 'flex' });

    gsap.to($('.modal-steps'), {
      x: 0,
      duration: 0,
    });
  };
  return (
    <div className="step-back-mob" onClick={stepBack}>
      <img src={stepBackMob} alt="" />
    </div>
  );
}
