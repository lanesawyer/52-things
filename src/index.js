import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './css/index.css';

document.body.addEventListener("mousewheel", event => {
  document.body.scrollLeft -= event.wheelDelta;
  return false;
});

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
