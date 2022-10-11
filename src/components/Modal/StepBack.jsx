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
    $('.modal').css({ overflowY: 'inherit' });
    $('.to').addClass('active');
    $('.on').removeClass('active');
  };
  return (
    <div className="step-back-mob" onClick={stepBack}>
      <img src={stepBackMob} alt="" />
    </div>
  );
}
