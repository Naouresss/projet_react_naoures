// App.js

import React from 'react';
import './App.css';
import UserList from './UserList';

// Définition du composant App
function App() {
  // Rendu du composant App
  return (
    <div className="App">
      <h1>Liste des utilisateurs GitHub</h1>
      <UserList />
    </div>
  );
}

export default App;
