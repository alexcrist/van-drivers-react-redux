import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from 'styled-components';

const Button = styles(RaisedButton)`
  flex-grow: 1;
  margin-bottom: 20px;
`;

export default ({ changeSelectedDate }) => {
  return (
    <Button label="Today" primary={true} />
  );
};