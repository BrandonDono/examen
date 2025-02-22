// src/components/UserList.jsx
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";

const UsersList = ({ users }) => {
    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Función para manejar el cambio del input de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrar usuarios basado en el término de búsqueda
    const filteredUsers = users.filter((usuario) =>
        usuario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2>Lista de Usuarios para Desarrollo</h2>
            
            {/* Input de búsqueda */}
            <input
                type="text"
                placeholder="Buscar por nombre, apellido o email..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.last_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
