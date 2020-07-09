import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:5000/api',
});

export default api;
