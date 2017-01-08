import React from 'react';
import ReactDOM from 'react-dom';
import ThingsScreen from '../components/ThingsScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThingsScreen />, div);
});
