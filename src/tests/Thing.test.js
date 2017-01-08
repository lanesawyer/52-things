import React from 'react';
import ReactDOM from 'react-dom';
import Thing from '../components/Thing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thing thing={{text: 'Test'}}/>, div);
});
