import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './css/index.css';

document.body.addEventListener("mousewheel", event => {
  document.body.scrollLeft -= event.wheelDelta;
  return false;
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
