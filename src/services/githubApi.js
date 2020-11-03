/* eslint-disable max-len */
export const getUser = async(userName) => {
  const profile = await fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      url: json.html_url,
      followers: json.followers,
      following: json.following
    }));

  const repos = await fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      name: repo.name,
      url: repo.html_url
    })));

  return { profile, repos };
};
