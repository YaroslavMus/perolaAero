import React from 'react';

import thanksCheck from '../../assets/img/thanks-check.svg';

export default function ModalThanks() {
  return (
    <div className="modal-thanks">
      <div className="modal-thanks-img">
        <img src={thanksCheck} alt="" />
      </div>
      <div className="modal-thanks-text">
        Благодарим за доверие!
        <br /> Мы свяжемся с вами <br />
        для обсуждения деталей полета.
      </div>
    </div>
  );
}
