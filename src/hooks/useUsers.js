// src/hooks/useUsers.js
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/UserServices";  // Correcta la importación

export default function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    return { users };
}
