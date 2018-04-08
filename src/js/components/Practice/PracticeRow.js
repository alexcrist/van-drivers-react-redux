import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import PracticeEntry from './PracticeEntry';

import '../../../css/components/Practice/PracticeRow.css';

export default ({ date, drivers, numDrivers, createDriver, deleteDriver }) => {
  const formattedDate = moment(date, 'MM-DD-YYYY').format('ddd, MMM Do');
  const entries = [];

  _.times(numDrivers, index => {
    const driver = drivers[index];
    entries.push(
      <PracticeEntry
        key={index}
        driver={driver}
        date={date}
        createDriver={createDriver}
        deleteDriver={deleteDriver} />
    );
  });

  return (
    <div className='PracticeRow'>
      <div className='PracticeRow-date'>{formattedDate}</div>
      <div className='PracticeRow-entries'>
        {entries}
      </div>
    </div>
  );
};
