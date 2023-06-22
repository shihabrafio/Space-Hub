import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mymissions from '../__mocks__/Mymission';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('MyMissions', () => {
  it('render My Missions Components', () => {
    render(<Mymissions />);
    expect(Mymissions).toMatchSnapshot();
  });
});
