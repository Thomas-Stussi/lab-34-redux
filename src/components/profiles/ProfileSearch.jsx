import React from 'react';

const ProfileSearch = (handleChange, handleSubmit) => {
  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleSubmit} />
    </>
  );
};

export default ProfileSearch;
