// components/UserList.js
import React, { useState, useEffect } from 'react';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Rechercher un utilisateur..."
        value={searchTerm}
        onChange={handleSearch}
      />

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Login</th>
      <th>Avatar</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map(user => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.login}</td>
        <td><img src={user.avatar_url} alt={user.login} /></td>
        <td>{user.type}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default UserList;
