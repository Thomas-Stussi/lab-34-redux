import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setLoading, setSearch } from '../../actions/githubActions';

const ProfileSearch = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.search);

  const handleSubmit = () => {
    dispatch(setLoading(true));
    dispatch(fetchUser(userName));
  };
  
  const handleChange = ({ target }) => {
    dispatch(setSearch(target.value));
  };

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Search Github Profiles</button>
    </>
  );
};

export default ProfileSearch;
