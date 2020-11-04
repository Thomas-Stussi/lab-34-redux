import { setLoading, setSearch, setUser } from '../actions/githubActions';
import reducer from './githubReducer';

describe('githubReducer', () => {
  it('handles the SET_USER action', () => {
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

  it('handles the SET_LOADING action', () => {
    const state = {
      profile: { please: 'search' },
      repos: [],
      search: '',
      loading: false,
      error: null,
    };

    const action = setLoading(true);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      profile: { please: 'search' },
      repos: [],
      search: '',
      loading: true,
      error: null,
    });
  });

  it('handles the SET_SEARCH action', () => {
    const state = {
      profile: { please: 'search' },
      repos: [],
      search: '',
      loading: false,
      error: null,
    };

    const action = setSearch('test search');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      profile: { please: 'search' },
      repos: [],
      search: 'test search',
      loading: false,
      error: null,
    });
  });
});
