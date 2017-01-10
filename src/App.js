import React, { Component } from 'react';
import firebase from 'firebase';

import Sidebar from './components/Sidebar.js';
import NewUserForm from './components/NewUserForm.js';
import LoginForm from './components/LoginForm.js';
import ThingsScreen from './components/ThingsScreen.js';

import './css/App.css';
import './css/forms.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false
    }

    var self = this;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        self.setState({ signedIn: true })
      } else {
        self.setState({ signedIn: false })
      }
    });
  }
  // get categories of things to pass into thing list

  renderLoginScreen = () => {
    return (
      <div className='things'>
        <NewUserForm />
        <LoginForm />
      </div>
    );
  }

  renderThingsScreen = () => {
    return (
      <div className='things'>
        <ThingsScreen />
      </div>
    );
  }

  render() {
      return (
        <div className='App row'>
          <Sidebar />
          {this.state.signedIn ? this.renderThingsScreen() : this.renderLoginScreen()}
        </div>
      );
    }
}

export default App;
