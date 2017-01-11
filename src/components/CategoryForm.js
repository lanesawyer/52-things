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
        <button type='submit'>
          <i className='fa fa-plus' aria-hidden='true' title='Add'></i> Category
        </button>
      </form>
    );
  }
}

export default CategoryForm
