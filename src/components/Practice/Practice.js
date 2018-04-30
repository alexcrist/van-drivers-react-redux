import React from 'react';
import _ from 'lodash';
import PracticeRow from './PracticeRow/PracticeRow';

import './Practice.css';

export default ({ drivers, createDriver, deleteDriver }) => {

  let driverList = [];
  _.forOwn(drivers, ({ numDrivers, drivers }, date) => {
    driverList.push({ date, drivers, numDrivers });
  });
  driverList = _.sortBy(driverList, ({ date }) => date);
  const rows = _.map(driverList, ({ date, drivers, numDrivers }, index) => {
    return (
      <PracticeRow
        key={index}
        date={date}
        drivers={drivers}
        numDrivers={numDrivers}
        createDriver={createDriver}
        deleteDriver={deleteDriver} />
    );
  });
  
  return (
    <div className='Practice'>
      <div className='Practice-header'>
        <div>Practice</div>
      </div>
      <div className='Practice-content'>
        {rows}
      </div>
    </div>
  );
};