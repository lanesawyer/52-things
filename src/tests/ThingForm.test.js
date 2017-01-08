import React from 'react';
import ReactDOM from 'react-dom';
import ThingForm from '../components/ThingForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThingForm />, div);
});
