import React from 'react';
import $ from 'jquery';

import 'react-datepicker/dist/react-datepicker.css';

import StepBack from './StepBack';
import FixedClose from './FixedClose';
import ModalStepRight from './ModalStepRight';
import ModalStepLeft from './ModalStepLeft';

import modalLogo from '../../assets/img/logo-footer.svg';

export default function Modal() {
  return (
    <div className="modal">
      <FixedClose />
      <StepBack />
      <div className="modal-inner">
        <div className="modal-logo">
          <img src={modalLogo} alt="" />
        </div>
        <div className="modal-steps">
          <ModalStepLeft />
          <ModalStepRight />
        </div>
      </div>
    </div>
  );
}
