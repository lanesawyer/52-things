import React, { Component } from 'react';

import CategoryService from '../services/CategoryService.js';

class CategoryForm extends Component {
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
      CategoryService.addCategory(this.state.value);
      this.setState({ value: '' });
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Thing:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Add Category' />
      </form>
    );
  }
}

export default CategoryForm
