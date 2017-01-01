import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import firebase from "firebase";

var config = {
      apiKey: "AIzaSyDAYNHGNywDByxSkgew5PJDIPVz1pAyF5g",
      authDomain: "things-eb829.firebaseapp.com",
      databaseURL: "https://things-eb829.firebaseio.com",
      storageBucket: "things-eb829.appspot.com",
      messagingSenderId: "475260068013"
    };

firebase.initializeApp(config);
var database = firebase.database();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
