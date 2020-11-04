import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfileSearch from './ProfileSearch';
import { Provider } from 'react-redux';
import store from '../../store';

describe('ProfileSearch component', () => {
  afterEach(() => cleanup());
  it('renders ProfileSearch', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ProfileSearch />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
