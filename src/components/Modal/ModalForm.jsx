import React from 'react';
import $ from 'jquery';
import { baseURL, currentLanguage } from '../Config';
import { useForm } from 'react-hook-form';

import ModalOrderDate from './ModalOrderDate';
import ModalSelect from './ModalSelect';
import ModalBtn from './ModalBtn';
import { useData } from './DataContext';

import directionChangeV from '../../assets/img/direction-change-v.svg';
import directionChange from '../../assets/img/direction-change.svg';

export default function ModalForm({ frontData }) {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const { data, setValues } = useData();
  const onSubmit = (data) => {
    setValues(data);
  };

  const useSelect = () => {
    let delayTimer = null;
    $(document).on('keydown', '.autocomplete-from, .autocomplete-to', function () {
      var input = this,
        value = $(this).val();

      if (delayTimer) {
        clearTimeout(delayTimer);
      }
      delayTimer = setTimeout(function () {
        $('#cities_holder').remove();

        if (value.length >= 2) {
          $.ajax({
            url: baseURL + 'wp-admin/admin-ajax.php',
            type: 'post',
            data: {
              action: 'select_city',
              current_language: $('#current_language').val(),
              value: value,
            },
            beforeSend: function () {
              $(input).addClass('loader');
            },
            success: function (response) {
              if (response != '') {
                $(input).removeClass('loader');
                $(input)
                  .closest('.modal-order-input-core')
                  .append('<div id="cities_holder"><ul></ul></div>');
                for (var key in response) {
                  $('#cities_holder ul').append(
                    '<li>' +
                      response[key][0] +
                      ', <span class="country">' +
                      response[key][1] +
                      ',</span> <span class="iso">' +
                      response[key][2] +
                      '</span></li>',
                  );
                }
              }
            },
          });
        }
      }, 1000);
    });

    $(document).on('click', '#cities_holder ul li', function () {
      $(this).closest('.modal-order-input-core').find('.autocomplete-from').val($(this).text());
      $(this).closest('.modal-order-input-core').find('.autocomplete-to').val($(this).text());
      $('#cities_holder').remove();
    });
  };
  const directionClick = () => {
    let from = $('.autocomplete-from').val(),
      to = $('.autocomplete-to').val();
    $('.autocomplete-from').val(to);
    $('.autocomplete-to').val(from);
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-left">
        <div className="modal-booking-line-holder">
          <div className="modal-order-inputs-holder">
            <div className="modal-order-inputs" data-booking-index="0">
              <div className="modal-order-input modal-order-input-from">
                <div className="modal-order-input-title">{frontData.site_modal_from}</div>
                <div className="modal-order-input-core">
                  <input
                    {...register('from', { required: true })}
                    type="text"
                    placeholder={frontData.site_modal_from}
                    className="autocomplete-from"
                    onClick={useSelect}
                  />
                  <div className="input-direction-change" onClick={directionClick}>
                    <img src={directionChange} alt="" />
                    <img src={directionChangeV} alt="" className="input-direction-change-mob" />
                  </div>
                </div>
              </div>
              <div className="modal-order-input modal-order-input-to">
                <div className="modal-order-input-title">{frontData.site_modal_to}</div>
                <div className="modal-order-input-core">
                  <input
                    {...register('to', { required: true })}
                    type="text"
                    placeholder={frontData.site_modal_to}
                    className="autocomplete-to"
                    onClick={useSelect}
                  />
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
