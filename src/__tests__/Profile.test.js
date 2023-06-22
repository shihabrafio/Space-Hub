import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Profile from '../components/Profile';
import dragonsReducer from '../redux/dragons/dragonsSlice';
import rocketsReducer from '../redux/rockets/rocketsSlice';
import missionsReducer from '../redux/missions/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

describe('Profile component', () => {
  test('renders with reserved dragons', () => {
    const reservedDragons = [
      { id: 1, name: 'Dragon 1', reserved: true },
      { id: 2, name: 'Dragon 2', reserved: true },
    ];

    const { container } = render(
      <Provider store={store}>
        <Profile
          reservedDragons={reservedDragons}
          reservedRockets={[]}
          activeMissions={[]}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with reserved rockets', () => {
    const reservedRockets = [
      { id: 1, name: 'Rocket 1', reserved: true },
      { id: 2, name: 'Rocket 2', reserved: true },
    ];

    const { container } = render(
      <Provider store={store}>
        <Profile
          reservedDragons={[]}
          reservedRockets={reservedRockets}
          activeMissions={[]}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with active missions', () => {
    const activeMissions = [
      { id: 1, name: 'Mission 1', status: true },
      { id: 2, name: 'Mission 2', status: true },
    ];

    const { container } = render(
      <Provider store={store}>
        <Profile
          reservedDragons={[]}
          reservedRockets={[]}
          activeMissions={activeMissions}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with no reserved dragons or rockets', () => {
    const { container } = render(
      <Provider store={store}>
        <Profile
          reservedDragons={[]}
          reservedRockets={[]}
          activeMissions={[]}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with no active missions', () => {
    const { container } = render(
      <Provider store={store}>
        <Profile
          reservedDragons={[]}
          reservedRockets={[]}
          activeMissions={[]}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
