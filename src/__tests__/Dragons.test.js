import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Dragons from '../components/Dragons';
import dragonsReducer from '../redux/dragons/dragonsSlice';

describe('Dragons component', () => {
  it('renders correctly', () => {
    const dragons = [
      {
        id: 1,
        name: 'Dragon 1',
        flickr_images: 'dragon1.jpg',
        description: 'Dragon 1 Description',
        reserved: false,
      },
      {
        id: 2,
        name: 'Dragon 2',
        flickr_images: 'dragon2.jpg',
        description: 'Dragon 2 Description',
        reserved: true,
      },
    ];

    const rootReducer = combineReducers({
      dragons: dragonsReducer,
    });

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        dragons: {
          dragons,
          status: 'success',
          error: null,
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Dragons />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
