import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.6:4444',
});

export default api;