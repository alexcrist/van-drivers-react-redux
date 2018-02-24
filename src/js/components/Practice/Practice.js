import React from 'react';
import _ from 'lodash';
import { Card, CardHeader } from 'material-ui/Card';
import styles from 'styled-components';
import Row from './Row';

const Container = styles.div`
  margin: 10px;
`;

const HeaderContainer = styles(Card)`

`;

const RowContainer = styles(Card)`
  padding: 1px 20px;
`;

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
    return <Row key={index} date={date} drivers={drivers} numDrivers={numDrivers} />;
  });
  
  return (
    <Container>
      <HeaderContainer>
        <CardHeader title='Practice' titleStyle={{ fontSize: '16px' }} />
      </HeaderContainer>
      <RowContainer>
        {rows}
      </RowContainer>
    </Container>
  );
};