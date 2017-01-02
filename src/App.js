import React, { Component } from 'react';

import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';
import ThingForm from './components/ThingForm.js';
import ThingList from './components/ThingList.js';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginForm />
        <ThingForm />
        <ThingList />
      </div>
    );
  }
}

export default App;
