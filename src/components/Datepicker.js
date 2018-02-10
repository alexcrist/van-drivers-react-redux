import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import styles from 'styled-components';

const Datepicker = styles.div`
  display: flex;
`;

const Button = styles(RaisedButton)`
  flex-grow: 3;
  margin: 10px;
`;

const Date = styles.div`
  margin: 10px;
  line-height: 36px;
  flex-grow: 2;
  text-align: center;
`;

const Arrow = styles(FontIcon)`
  margin-top: -3px;
`;

export default ({ changeSelectedDate }) => {
  return (
    <Datepicker>
      <Button icon={<Arrow className='material-icons'>chevron_left</Arrow>} />
      <Date>Feb 9, 2018</Date>
      <Button icon={<Arrow className='material-icons'>chevron_right</Arrow>} />
    </Datepicker>
  );
};