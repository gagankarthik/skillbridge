// src/lib/api.ts
import axios from 'axios';

const FASTAPI_BASE_URL = process.env.NEXT_PUBLIC_FASTAPI_BASE_URL;

if (!FASTAPI_BASE_URL) {
  console.error('NEXT_PUBLIC_FASTAPI_BASE_URL is not defined!');
  
}

const api = axios.create({
  baseURL: FASTAPI_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;