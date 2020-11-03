/* eslint-disable max-len */
export const getUser = async(userName) => {
  const userProfile = await fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => json.map(profile => ({
      name: profile.name,
      url: profile.html_url,
      followers: profile.followers,
      following: profile.following
    })));

  const userRepos = await fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      name: repo.name,
      url: repo.html_url
    })));

  return { userProfile, userRepos };
};
