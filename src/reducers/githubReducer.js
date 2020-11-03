import { SET_REPOS, SET_LOADING } from '../actions/githubActions';

const initialState = {
  repos: [],
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  // eslint-disable-next-line keyword-spacing
  switch (action.type) {
    case SET_REPOS:
      return { ...state, repos: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
