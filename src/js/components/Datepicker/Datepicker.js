import React from 'react';

import '../../../css/components/Datepicker/Datepicker.css';

export default ({ changeSelectedDate }) => {
  return (
    <div className='Datepicker'>
      <button className='Datepicker-left'>&#8249;</button>
      <div className='Datepicker-date'>Feb 9, 2018</div>
      <button className='Datepicker-right'>&#8250;</button>
    </div>
  );
};