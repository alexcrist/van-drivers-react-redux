import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import styles from 'styled-components';
import _ from 'lodash';
import fecha from 'fecha';

const Container = styles.div`
  display: flex;
  margin: 20px 0;
`;

const Date = styles.div`
  min-width: 90px;
  line-height: 72px;
  font-size: 15px;
`;

const Driver = styles(Card)`
  flex-grow: 1;
  margin-left: 20px;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const DriverLabel = styles.div`
  line-height: 72px;
  margin-left: 15px;
  font-size: 16px;
`;

const Input = styles(TextField)`
  flex-grow: 1;
  margin -5px 0 0 15px;
`;

const Button = styles(RaisedButton)`
  vertical-align: text-bottom;
  height: 36px;
`;

const SaveButton = Button.extend`

`;

const DeleteButton = Button.extend`

`;

const Icon = styles(FontIcon)`
  margin-top: -3px;
`;

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
      <Driver>
        <DriverLabel>tests</DriverLabel>
        <DeleteButton 
          style={{ margin: '18px 15px 0 10px', minWidth: '50px' }} 
          icon={<Icon className='material-icons'>delete</Icon>} />
      </Driver>
    );
    } else {

      items.push(
        <Driver>
          <Input 
            style={{ width: 'unset' }}
            hintText={getHintText()} floatingLabelText='Name' />
          <SaveButton 
            style={{ margin: '18px 15px 0 10px', minWidth: '50px' }}
            icon={<Icon className='material-icons'>add</Icon>} />
        </Driver>
      );
    }
  });

  const formattedDate = fecha.format(fecha.parse(date, 'YYYY-MM-DD'), 'ddd, MMM Do');

  return (
    <Container>
      <Date>{formattedDate}</Date>
      {items}
    </Container>
  );
};
