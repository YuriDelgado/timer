import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import TimeContainer from './TimeContainer';

it('renders TimeContainer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
  const tree = renderer.create(<TimeContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

