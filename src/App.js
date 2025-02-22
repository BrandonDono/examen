// src/App.js
import React from "react";
import UsersList from './components/UserList';
import useUsers from './hooks/useUsers';

function App() {
  const { users } = useUsers();  // Ahora puedes usar este hook directamente

  return (
    <div className="App">
      <header className="App-header">
        <UsersList users={users} />
      </header>
    </div>
  );
}

export default App;
