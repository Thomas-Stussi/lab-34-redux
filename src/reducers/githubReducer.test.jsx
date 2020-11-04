import { setUser } from '../actions/githubActions';
import reducer from './githubReducer';

describe('githubReducer', () => {
  it('handles the SET_USERS action', () => {
    const state = {
      profile: { please: 'search' },
      repos: [],
      search: '',
      loading: false,
      error: null,
    };

    const action = setUser({
      profile: { test: 'profile' },
      repos: [{ test: 'repo' }]
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      please: 'no',
      profile: { test: 'profile' },
      repos: [{ test: 'repo' }],
      search: '',
      loading: false,
      error: null
    });
  });
});
