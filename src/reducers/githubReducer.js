/* eslint-disable max-len */
import { SET_USER, SET_LOADING, SET_SEARCH } from '../actions/githubActions';

const initialState = {
  profile: { please: 'search' },
  repos: [],
  search: '',
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  // eslint-disable-next-line keyword-spacing
  switch (action.type) {
    case SET_USER:
      return { ...state, please: 'no', profile: action.payload.profile, repos: action.payload.repos };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
