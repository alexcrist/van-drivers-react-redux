import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from 'styled-components';

const Datepicker = styles.div`
  margin-bottom: 20px;

`;

export default ({ changeSelectedDate }) => {
  return (
    <Datepicker>
      <RaisedButton label="Today" primary={true} />
    </Datepicker>
  );
};