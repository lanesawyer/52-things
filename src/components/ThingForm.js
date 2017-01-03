import React, { Component } from 'react';
import firebase from 'firebase';

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
    var user = firebase.auth().currentUser;

    firebase.database().ref('things/' + user.uid).push({
      text: this.state.value
    });

    //this.state.value = '';

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Thing:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default ThingForm