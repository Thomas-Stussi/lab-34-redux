import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setSearch } from '../../actions/githubActions';
import ProfileSearch from './ProfileSearch';

const Profile = () => {
  const user = (state => state.user);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const handleSubmit = userName => {
    dispatch(fetchUser(userName))
  }

  const handleChange = ({ target }) => {
    dispatch(setSearch(target.value))
  }

  if(loading) return <h1>Loading...</h1>;

  if(user === {}) return <ProfileSearch onChange={} onSubmit={} />;

  return (
    <>
    <ProfileSearch onChange={handleChange} onSubmit={handleSubmit} />

    </>
  )
}

export default Profile;
