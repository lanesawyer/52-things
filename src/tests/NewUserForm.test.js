import React from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from '../components/NewUserForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewUserForm />, div);
});
