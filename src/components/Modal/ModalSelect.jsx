import React from 'react';
import $ from 'jquery';

export default function ModalSelect({ frontData }) {
  const useSelect = () => {
    $('.select').on('click', function () {
      $('.select__list').toggleClass('open');
    });

    $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().removeClass('open');
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').removeClass('open');
      }
    });
  };
  return (
    <div className="modal-order-input modal-order-input-count">
      <div className="modal-order-input-title">{frontData.site_modal_type}</div>
      <div className="modal-order-input-core">
        <div className="select" onClick={useSelect}>
          <input
            className="select__input"
            type="hidden"
            defaultValue={'От аэропорта до аэропорта'}
          />
          <div className="select__head open">От аэропорта до аэропорта</div>
          <ul className="select__list">
            <li className="select__item">От аэропорта до аэропорта</li>
            <li className="select__item">От аэропорта до двери</li>
            <li className="select__item">От двери до аэропорта</li>
            <li className="select__item">От двери до двери</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
