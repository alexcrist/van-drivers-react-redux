import React from 'react';
import _ from 'lodash';
import PracticeRow from './PracticeRow';

export default ({ practiceDrivers, createDriver, deleteDriver }) => {

  practiceDrivers = {
    '2017-12-31': {
      numDrivers: 1,
      drivers: []
    },
    '2018-01-01': {
      numDrivers: 2,
      drivers: []
    },
    '2018-01-02': {
      numDrivers: 2,
      drivers: [
        'guy3', 'guy4'
      ]
    },
    '2018-01-03': {
      numDrivers: 1,
      drivers: [
        'guy3'
      ]
    }
  };

  let driverList = [];
  _.forOwn(practiceDrivers, ({ numDrivers, drivers }, date) => {
    driverList.push({ date, drivers, numDrivers });
  });
  driverList = _.sortBy(driverList, ({ date }) => date);
  const rows = _.map(driverList, ({ date, drivers, numDrivers }, index) => {
    return (
      <PracticeRow
        key={index}
        date={date}
        drivers={drivers}
        numDrivers={numDrivers} />
    );
  });
  
  return (
    <div>
      <div>
        <div>Practice</div>
      </div>
      <div>
        {rows}
      </div>
    </div>
  );
};