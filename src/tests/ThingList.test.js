import React from 'react';
import ReactDOM from 'react-dom';
import ThingList from '../components/ThingList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThingList />, div);
});
