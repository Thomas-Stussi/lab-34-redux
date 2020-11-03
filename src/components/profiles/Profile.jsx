/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.loading);

  if (loading) {
    return <h1>Loading...</h1>;

  } else if (user === {}) {
    const repoElements = user.userRepos.map(repo => (
      <li key={repo.name}>
        <p>Name: {repo.name}</p>
        <a href={repo.url}>Link: {repo.url}</a>
      </li>
    ));

    return (
      <>
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
  } else { return <p>Please Make a Search</p>; }
};

export default Profile;
