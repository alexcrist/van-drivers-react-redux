import React from 'react';

import './Status.css';

export default ({ successMessage, failureMessage }) => {
  const success = (
    <div className='Status Status-success'>
      {successMessage}
    </div>
  );

  const failure = (
    <div className='Status Status-failure'>
      {failureMessage}
    </div>
  );

  if (successMessage) {
    return success;
  } else if (failureMessage) {
    return failure;
  }
  return null;
};
