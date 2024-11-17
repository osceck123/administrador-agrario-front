import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/', // Cambia según tu backend
});

export const login = (data) => API.post('/login', data);
export const register = (data) => API.post('/users', data);
export const getUserProfile = (token) =>
  API.get('/profile', { headers: { Authorization: `Bearer ${token}` } });

export const logout = () => API.post('/logout');