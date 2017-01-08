import React from 'react';
import ReactDOM from 'react-dom';
import UserMenu from '../components/UserMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserMenu />, div);
});
