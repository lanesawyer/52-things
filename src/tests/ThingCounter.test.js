import React from 'react';
import ReactDOM from 'react-dom';
import ThingCounter from '../components/ThingCounter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThingCounter />, div);
});
