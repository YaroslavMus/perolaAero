import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';

export default function FixedCall() {


  const openModal = () => {
    $('.fixed-modal-overlay').addClass('active');
    $('.modal').addClass('active');
  };
  
  return (
    <div className="fixed-call">
      <div className="fixed-call-body" onClick={openModal}></div>
      <div className="fixed-call-text">
        Оформить <br />
        заявку
      </div>
      <div className="fixed-call-mob">
        <svg
          width="28"
          height="15"
          viewBox="0 0 28 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.7173 1.50707C27.7173 1.50707 23.5597 -0.218056 21.4061 0.55204L17.6199 1.79137L7.01247 0L4.26292 1.1648L11.0703 3.925L5.59889 5.71913L1.22233 4.49636L0 5.01252L2.73292 7.26484L1.58543 7.75616L1.81548 7.94661H9.1467L27.8448 2.03979C28.0998 1.92386 28.0111 1.63956 27.709 1.50707"
            fill="white"
          />
          <path d="M25.2193 13.6547H4.33984V14.4828H25.2193V13.6547Z" fill="white" />
        </svg>
      </div>
      <div className="fixed-modal-overlay"></div>
    </div>
  );
}
