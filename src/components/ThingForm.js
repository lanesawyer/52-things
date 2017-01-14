import React, { Component } from 'react';

import ThingService from '../services/ThingService.js';

class ThingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {

    if (this.state.value !== '') {
      ThingService.addThing(this.state.value, this.props.category);
      this.setState({ value: '' });
    }

    event.preventDefault();
  }

  render() {
    return (
      <form className='inline-form' onSubmit={this.handleSubmit}>
        <label>
          <input type='text' placeholder="Thing" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type='submit'>
          <i className='fa fa-plus' aria-hidden='true' title='Add'></i>
        </button>
      </form>
    );
  }
}

export default ThingForm
