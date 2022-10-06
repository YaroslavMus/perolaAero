import React from 'react';

import ModalOrderDate from './ModalOrderDate';
import ModalSelect from './ModalSelect';
import ModalBtn from './ModalBtn';

import directionChangeV from '../../assets/img/direction-change-v.svg';
import directionChange from '../../assets/img/direction-change.svg';

export default function ModalForm({frontData}) {
  return (
    <form>
      <div className="modal-left">
        <div className="modal-booking-line-holder">
          <div className="modal-order-inputs-holder">
            <div className="modal-order-inputs" data-booking-index="0">
              <div className="modal-order-input modal-order-input-from">
                <div className="modal-order-input-title">{frontData.site_modal_from}</div>
                <div className="modal-order-input-core">
                  <input type="text" placeholder={frontData.site_modal_from} className="autocomplete-from" />
                  <div className="input-direction-change">
                    <img src={directionChange} alt="" />
                    <img src={directionChangeV} alt="" className="input-direction-change-mob" />
                  </div>
                </div>
              </div>
              <div className="modal-order-input modal-order-input-to">
                <div className="modal-order-input-title">{frontData.site_modal_to}</div>
                <div className="modal-order-input-core">
                  <input type="text" placeholder={frontData.site_modal_to} className="autocomplete-to" />
                </div>
              </div>
              <ModalOrderDate frontData={frontData} />
              <ModalSelect frontData={frontData} />
              <ModalBtn frontData={frontData} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
