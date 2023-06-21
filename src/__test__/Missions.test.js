import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import Missions from '../components/Missions';
import { Provider } from 'react-redux';
import store from '../redux/store';

const render = (component) => rtlRender(
    <Provider store={store}>
      {component}
    </Provider>,
  );

describe('MyRocketss', () => {
  it('render My Rockets Components', () => {
    render(<Missions />);
    expect(Missions).toMatchSnapshot();
  });
});