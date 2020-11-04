import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Profile from './Profile';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Profile component', () => {
  afterEach(() => cleanup());
  

  it('renders Profile', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Profile />
      </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
