import React from 'react';
import DatePicker from 'react-datepicker';
import $ from 'jquery';

const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июлю',
  'Июнь',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const locale = {
  localize: {
    day: (n) => days[n],
    month: (n) => months[n],
  },
  formatLong: {
    date: () => 'mm.dd.yyyy',
  },
};
export default function ModalOrderDate() {
  const [startDate, setStartDate] = React.useState(new Date());
  const openDatepicker = () => {
    $('.icon-date').on('click', function () {
      $('.datepicker-calendar-text').addClass('open');
    });
    $(document).click(function (e) {
      if (!$(e.target).closest('.icon-date').length) {
        $('.datepicker-calendar-text').removeClass('open');
      }
    });
  };
  return (
    <div className="modal-order-date">
      <div className="modal-order-input">
        <div className="modal-order-input-title">КОГДА</div>
        <div className="modal-order-input-core icon-date " onClick={openDatepicker}>
          <DatePicker
            className="input-calendar"
            locale={locale}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <div className="datepicker-calendar-text">Выберите дату отправления</div>
        </div>
      </div>
    </div>
  );
}
