import React from 'react';

import ModalOrderDate from './ModalOrderDate';
import ModalSelect from './ModalSelect';
import ModalBtn from './ModalBtn';

import directionChangeV from '../../assets/img/direction-change-v.svg';
import directionChange from '../../assets/img/direction-change.svg';

export default function ModalForm() {
  return (
    <form>
      <div className="modal-left">
        <div className="modal-booking-line-holder">
          <div className="modal-order-inputs-holder">
            <div className="modal-order-inputs" data-booking-index="0">
              <div className="modal-order-input modal-order-input-from">
                <div className="modal-order-input-title">откуда</div>
                <div className="modal-order-input-core">
                  <input type="text" placeholder="Откуда" className="autocomplete-from" />
                  <div className="input-direction-change">
                    <img src={directionChange} alt="" />
                    <img src={directionChangeV} alt="" className="input-direction-change-mob" />
                  </div>
                </div>
              </div>
              <div className="modal-order-input modal-order-input-to">
                <div className="modal-order-input-title">КУДА</div>
                <div className="modal-order-input-core">
                  <input type="text" placeholder="Куда" className="autocomplete-to" />
                </div>
              </div>
              <ModalOrderDate />
              <ModalSelect />
              <ModalBtn />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
