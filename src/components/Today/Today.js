import React from 'react';

import './Today.css';

export default ({ today }) => {
  return (
    <button
      onClick={() => today()}
      className='Today'>Today</button>
  );
};