import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import StepBack from './StepBack';
import FixedClose from './FixedClose';
import ModalStepRight from './ModalStepRight';
import ModalStepLeft from './ModalStepLeft';

import modalLogo from '../../assets/img/logo-footer.svg';

export default function Modal({frontData}) {
  return (
    <div className="modal">
      <FixedClose />
      <StepBack />
      <div className="modal-inner">
        <div className="modal-logo">
          <img src={modalLogo} alt="" />
        </div>
        <div className="modal-nav">
          <div>
            <input type="radio" name="radio" id="one" />
            <label className="modal-nav-input" htmlFor="one">
              {frontData.site_modal_header1}
            </label>
          </div>
          <div>
            <input type="radio" name="radio" id="two" />
            <label className="modal-nav-input" htmlFor="two">
              {frontData.site_modal_header2}
            </label>
          </div>
        </div>
        <div className="modal-steps">
          <ModalStepLeft frontData={frontData} />
          <ModalStepRight frontData={frontData} />
        </div>
      </div>
    </div>
  );
}
