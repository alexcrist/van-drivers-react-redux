import React from 'react';
import moment from 'moment';

import './Datepicker.css';

export default ({ date, changeDate }) => {
  const prettyDate = moment(date, 'MM-DD-YYYY').format('MMM. D');
  const lastWeek = moment(date, 'MM-DD-YYYY').subtract(1, 'week').format('MM-DD-YYYY');
  const nextWeek = moment(date, 'MM-DD-YYYY').add(1, 'week').format('MM-DD-YYYY');

  return (
    <div className='Datepicker'>
      <button
        onClick={() => changeDate(lastWeek)}
        className='Datepicker-left'>&#8249;</button>
      <div className='Datepicker-date'>{prettyDate}</div>
      <button
        onClick={() => changeDate(nextWeek)}
        className='Datepicker-right'>&#8250;</button>
    </div>
  );
};