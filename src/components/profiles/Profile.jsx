/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setLoading, setSearch } from '../../actions/githubActions';
import ProfileSearch from './ProfileSearch';

const Profile = () => {
  const user = (state => state.user);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const handleSubmit = userName => {
    dispatch(setLoading(true));
    dispatch(fetchUser(userName));
  };

  const handleChange = ({ target }) => {
    dispatch(setSearch(target.value));
  };

  const repoElements = user.userRepos.map(repo => (
    <li key={repo.name}>
      <p>Name: {repo.name}</p>
      <a href={repo.url}>Link: {repo.url}</a>
    </li>
  ));

  if (loading) return <h1>Loading...</h1>;

  if (user === {}) return <ProfileSearch onChange={handleChange} onSubmit={handleSubmit} />;

  return (
    <>
      <ProfileSearch onChange={handleChange} onSubmit={handleSubmit} />
      <h1>{user.userProfile.name}</h1>
      <a href={user.userProfile.url}>Link: {user.userProfile.url}</a>
      <p>Follower Count: {user.userProfile.followers}</p>
      <p>Following {user.userProfile.followers} Users</p>
      <ul>
        Repositories:
        {repoElements}
      </ul>
    </>
  );
};

export default Profile;
