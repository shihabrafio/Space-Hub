import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Rockets from '../components/Rocket';
import rocketReducer from '../redux/rockets/rocketsSlice';

describe('Rockets component', () => {
  it('renders correctly', () => {
    const rockets = [
      {
        id: 1,
        name: 'Rocket 1',
        flickr_images: 'rocket1.jpg',
        description: 'Rocket 1 Description',
        reserved: false,
      },
      {
        id: 2,
        name: 'Rocket 2',
        flickr_images: 'rocket2.jpg',
        description: 'Rocket 2 Description',
        reserved: true,
      },
    ];

    const rootReducer = combineReducers({
      rockets: rocketReducer,
    });

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        rockets: {
          rockets,
          status: 'success',
          error: null,
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
