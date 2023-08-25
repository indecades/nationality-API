import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders correctly', () => { // creates snapshot test of the app component
  // asigned the var with the json format of the app component
  const tree = renderer
  .create(<App/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
  });