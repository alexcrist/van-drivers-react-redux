import React from 'react';

import '../../../css/components/Today/Today.css';

export default ({ today }) => {
  return (
    <button 
      onClick={() => today()}
      className='Today'>Today</button>
  );
};