import React from 'react';

import ModalForm from './ModalForm';


export default function ModalStepLeft({frontData}) {
  return (
    <div className="modal-step">
      <div className="modal-core">
        <ModalForm frontData={frontData} />
      </div>
    </div>
  );
}
