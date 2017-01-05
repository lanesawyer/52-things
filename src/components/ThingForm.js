import React, { Component } from 'react';

import ThingService from '../services/ThingService.js';

class ThingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    ThingService.addThing(this.state.value, this.props.category);

    this.setState({ value: '' });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Thing:
          <input type='text' ref={el => this.thingFormInput = el} value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Add' />
      </form>
    );
  }
}

export default ThingForm
