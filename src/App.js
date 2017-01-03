import React, { Component } from 'react';
import firebase from 'firebase';

import Header from './components/Header.js';
import NewUserForm from './components/NewUserForm.js';
import LoginForm from './components/LoginForm.js';
import ThingForm from './components/ThingForm.js';
import ThingList from './components/ThingList.js';
import logo from './logo.svg';
import './css/App.css';
import './css/forms.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false
    }

    var self = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.setState({ signedIn: true })
      } else {
        self.setState({ signedIn: false })
      }
    });
  }
  // get categories of things to pass into thing list

  render() {
    if (this.state.signedIn) {
return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to 52 Things</h2>
        </div>
        <ThingForm />
        <ThingList category='Category 1' />
        <ThingList category='Category 2' />
      </div>
    );
    } else {
      return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to 52 Things</h2>
        </div>
        <NewUserForm />
        <LoginForm />
      </div>
    );
    }
    
  }
}

export default App;
