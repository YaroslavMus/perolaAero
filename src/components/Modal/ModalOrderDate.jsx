import React from 'react';
import DatePicker from 'react-datepicker';

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
export default function ModalOrderDate({ frontData }) {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <div className="modal-order-date">
      <div className="modal-order-input">
        <div className="modal-order-input-title">{frontData.site_modal_when}</div>
        <div className="modal-order-input-core icon-date ">
          <DatePicker
            className="input-calendar"
            locale={locale}
            onChan
            selected={startDate}
            onChange={(date) => setStartDate(date)}>
            <div className="datepicker-calendar-text">Выберите дату отправления</div>
          </DatePicker>
        </div>
      </div>
    </div>
  );
}
