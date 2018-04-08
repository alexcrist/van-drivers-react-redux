import React from 'react';

import '../../../css/components/Status/Status.css';

export default ({ successMessage, failureMessage }) => {
  successMessage = 'asdfasdfa';

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
