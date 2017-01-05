import React, { Component } from 'react';
import firebase from 'firebase';

import Header from './components/Header.js';
import NewUserForm from './components/NewUserForm.js';
import LoginForm from './components/LoginForm.js';
import ThingCounter from './components/ThingCounter.js';
import ThingList from './components/ThingList.js';
import CategoryForm from './components/CategoryForm.js';

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
      <div className='container'>
        <NewUserForm />
        <LoginForm />
      </div>
    );
  }

  renderThingsScreen = () => {
    return (
      <div className='container'>
        <ThingCounter />
        <ThingList categoryTitle='Category 1' category='cat1' />
        <ThingList categoryTitle='Category 2' category='cat2' />
        <CategoryForm />
      </div>
    );
  }

  render() {
      return (
        <div className='App'>
          <Header />
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to 52 Things</h2>
          </div>
          {this.state.signedIn ? this.renderThingsScreen() : this.renderLoginScreen()}
        </div>
      );
    }
}

export default App;
