import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
});
