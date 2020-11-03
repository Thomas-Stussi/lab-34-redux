/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const profile = useSelector(state => state.profile);
  const repos = useSelector(state => state.repos);
  const loading = useSelector(state => state.loading);

  if (loading) {
    return <h1>Loading...</h1>;

  } else if (profile.please !== 'search') {
    console.log(profile);
    const repoElements = repos.map(repo => (
      <li key={repo.name}>
        <p>Name: {repo.name}</p>
        <a href={repo.url}>Link: {repo.url}</a>
      </li>
    ));

    return (
      <>
        <h1>{profile.name}</h1>
        <a href={profile.url}>Link: {profile.url}</a>
        <p>Follower Count: {profile.followers}</p>
        <p>Following {profile.followers} Users</p>
        <ul>
          Repositories:
          {repoElements}
        </ul>
      </>
    );

  } else {
    return <p>Please Make a Search</p>;
  }
};

export default Profile;
