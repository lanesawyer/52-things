import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './css/index.css';

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('serviceWorker.js').then(() => {
    console.log('service worker registered');
  }).catch((error) => {
    console.log('service worker registration failed: ' + error);
  });
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
