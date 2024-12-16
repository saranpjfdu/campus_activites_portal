// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchClubsLabs = () => API.get('/clubs-labs');
export const submitApplication = (data) => API.post('/apply', data);
