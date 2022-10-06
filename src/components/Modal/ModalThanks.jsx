import React from 'react';

import thanksCheck from '../../assets/img/thanks-check.svg';

export default function ModalThanks({frontData}) {
  return (
    <div className="modal-thanks">
      <div className="modal-thanks-img">
        <img src={thanksCheck} alt="" />
      </div>
      <div className="modal-thanks-text" dangerouslySetInnerHTML={{__html: frontData.site_modal_thanks}}></div>
    </div>
  );
}
