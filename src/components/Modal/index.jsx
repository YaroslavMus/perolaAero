import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';
import 'react-datepicker/dist/react-datepicker.css';
import { DataProvider } from './DataContext';

import StepBack from './StepBack';
import FixedClose from './FixedClose';
import ModalStepRight from './ModalStepRight';
import ModalStepLeft from './ModalStepLeft';

import modalLogo from '../../assets/img/logo-footer.svg';

export default function Modal({ frontData }) {
  const modalForwardList = (e) => {
    let modalStepWidth = $('.modal-step').innerWidth();
    $('.modal').css({ overflowY: 'auto' });
    $('.on').addClass('active');
    $('.to').removeClass('active');
    gsap.to($('.modal-steps'), {
      x: -modalStepWidth,
      duration: 0.5,
    });
  };
  const modalBackList = () => {
    $('.to').addClass('active');
    $('.on').removeClass('active');
    $('.modal').css({ overflowY: 'inherit' });
    gsap.to($('.modal-steps'), {
      x: 0,
      duration: 0.5,
    });
  };

  return (
    <div className="modal">
      <FixedClose />
      <StepBack />
      <DataProvider>
        <div className="modal-inner">
          <div className="modal-logo">
            <img src={modalLogo} alt="" />
          </div>
          <div className="modal-nav">
            <ul>
              <li onClick={modalBackList} className="to active ">
                {frontData.site_modal_header1}
              </li>
              <li onClick={modalForwardList} className="on">
                {frontData.site_modal_header2}
              </li>
            </ul>
          </div>
          <div className="modal-steps">
            <ModalStepLeft frontData={frontData} />
            <ModalStepRight frontData={frontData} />
          </div>
        </div>
      </DataProvider>
    </div>
  );
}
