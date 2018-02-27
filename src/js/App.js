import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedDate, createDriver, deleteDriver} from './state/actions';
import Datepicker from './components/Datepicker/Datepicker';
import Today from './components/Today/Today';
import Practice from './components/Practice/Practice';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Today changeSelectedDate={changeSelectedDate} />
        <Datepicker changeSelectedDate={changeSelectedDate} />
        <Practice 
          practiceDrivers={this.props.practiceDrivers}
          createDriver={this.props.createDriver}
          deleteDriver={this.props.deleteDriver} />
      </div>
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
