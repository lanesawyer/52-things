import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../components/Category';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Category />, div);
});
