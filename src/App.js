import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from 'styled-components';
import { changeSelectedDate, createDriver, deleteDriver} from './state/actions';
import Datepicker from './components/Datepicker';
import Today from './components/Today';
import Practice from './components/Practice/Practice';

const AppContainer = styles.div`
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Today changeSelectedDate={changeSelectedDate} />
        <Datepicker changeSelectedDate={changeSelectedDate} />
        <Practice 
          practiceDrivers={this.props.practiceDrivers}
          createDriver={this.props.createDriver}
          deleteDriver={this.props.deleteDriver} />
      </AppContainer>
    );
  }
}

const stateToProps = state => state;
const dispatchToProps = {
  changeSelectedDate,
  createDriver,
  deleteDriver
};

export default connect(stateToProps, dispatchToProps)(App);
