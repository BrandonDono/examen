// src/services/UserService.js
const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllUsers() {
    const response = await fetch(BASE_URL + "users/");
    return response.json();
}
