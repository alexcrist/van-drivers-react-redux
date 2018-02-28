import React from 'react';
import _ from 'lodash';
import fecha from 'fecha';

import '../../../css/components/Practice/PracticeRow.css';

const getHintText = () => {
  const options = [
    'You\'re a star!',
    'Thank you!',
    'Wow!',
    'Best driver ever!',
    'ROCK CLIMBING',
    'We appreciate you.',
    'Your dreams will bloom.',
    'Dental hygeine.',
    'Shia LaBeouf',
    'You can do anything!',
    'Shoot for the stars!',
    'No ragrets.'
  ];
  return options[Math.floor(Math.random() * options.length)];
};

export default ({ date, drivers, numDrivers }) =>  {
  const items = [];
  _.times(numDrivers, index => {
    const driver = drivers[index];
    if (driver) {
      items.push(
      <div className='PracticeRow-item'>
        <div className='PracticeRow-value'>tests</div>
        <button className='PracticeRow-delete'>x</button> 
      </div>
    );
    } else {

      items.push(
        <div className='PracticeRow-item'>
          <form className='PracticeRow-form'>
            <input 
              className='PracticeRow-input'
              placeholder={getHintText()} />
            <button className='PracticeRow-save'>+</button>
          </form>
        </div>
      );
    }
  });

  const formattedDate = fecha.format(fecha.parse(date, 'YYYY-MM-DD'), 'ddd, MMM Do');

  return (
    <div className='PracticeRow'>
      <div className='PracticeRow-date'>{formattedDate}</div>
      <div className='PracticeRow-items'>
        {items}
      </div>
    </div>
  );
};
