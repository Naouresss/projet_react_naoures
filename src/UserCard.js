// components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h3>{user.login}</h3>
      <p>Followers: {user.followers}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  );
};

export default UserCard;
