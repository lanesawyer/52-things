import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './Constants.js';
import App from './App';
import './css/index.css';

import firebase from "firebase";

var config = {
      apiKey: Constants.apiKey,
      authDomain: Constants.authDomain,
      databaseURL: Constants.databaseUrl,
      storageBucket: Constants.storageBucket,
      messagingSenderId: Constants.messagingSenderId
    };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
