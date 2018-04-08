import React, { Component } from 'react';

import '../../../css/components/Practice/PracticeEntry.css';

export default class PracticeEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  getHintText() {
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
  }

  updateInputValue(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  createDriver() {
    const { createDriver } = this.props;
    return () => {
      const name = this.state.inputValue;
      const { date } = this.props;
      createDriver({ name, date });
    }
  }

  getDriverElement() {
    const { driver, deleteDriver } = this.props;
    return (
      <div className='PracticeEntry'>
        <div className='PracticeEntry-value'>{driver.name}</div>
        <button 
          className='PracticeEntry-delete'
          onClick={() => deleteDriver(driver)}>x</button> 
      </div>
    );
  }

  getNonDriverElement() {
    return (
      <div className='PracticeEntry'>
        <form className='PracticeEntry-form'>
          <input
            value={this.state.inputValue}
            onChange={event => this.updateInputValue(event)}
            className='PracticeEntry-input'
            placeholder={this.getHintText()} />
          <button
            className='PracticeEntry-save'
            onClick={this.createDriver}>+</button>
        </form>
      </div>
    );
  }

  render() {
    const { driver } = this.props;
    return driver ? this.getDriverElement() : this.getNonDriverElement();
  }
}
