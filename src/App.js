import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedDate, createDriver, deleteDriver} from './state/actions';

class App extends Component {
  render() {
    return (
      <div>
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
