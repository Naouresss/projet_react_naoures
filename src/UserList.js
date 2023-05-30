// components/UserList.js

import React, { useState, useEffect } from 'react';

// Définition du composant UserList
const UserList = () => {
  // Déclaration des états users et searchTerm avec useState
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Utilisation de useEffect pour effectuer la récupération des données lors du chargement initial du composant
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fonction asynchrone pour récupérer les utilisateurs à partir de l'API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  // Fonction de gestion du changement dans le champ de recherche
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  // Filtrage des utilisateurs en fonction du terme de recherche
  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Rendu du composant UserList
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
          {/* Mapping sur la liste des utilisateurs filtrés pour afficher chaque utilisateur dans une ligne de tableau */}
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
