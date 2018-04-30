import React, { Component } from 'react';

import { connect } from 'react-redux';
import { today, changeDate, createDriver, deleteDriver } from '../../state/actions';

import Datepicker from '../Datepicker/Datepicker';
import Today from '../Today/Today';
import Practice from '../Practice/Practice';
import Status from '../Status/Status';
import Footer from '../Footer/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.today();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1 className='App-title'>Northeastern Climbing Team</h1>
          <h3 className='App-subtitle'>Van Scheduler</h3>
        </div>
        <div className='App-content'>
          <Today
            today={this.props.today} />
          <Datepicker
            date={this.props.date}
            changeDate={this.props.changeDate} />
          <Practice 
            drivers={this.props.drivers}
            createDriver={this.props.createDriver}
            deleteDriver={this.props.deleteDriver} />
          <Status
            successMessage={this.props.successMessage}
            failureMessage={this.props.failureMessage} />
        </div>
        <Footer />
      </div>
    );
  }
}

const stateToProps = state => state;
const dispatchToProps = {
  today,
  changeDate,
  createDriver,
  deleteDriver
};

export default connect(stateToProps, dispatchToProps)(App);
