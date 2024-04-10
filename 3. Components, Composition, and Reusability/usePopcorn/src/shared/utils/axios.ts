import axios from 'axios';
import { TMDB_ACCESS_TOKEN } from 'shared/constants/environments';

const PrivateInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'en-US', page: 1 },
  headers: {
    accept: 'application/json',
  },
});

PrivateInstance.interceptors.request.use(
  config => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${TMDB_ACCESS_TOKEN}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const instance = PrivateInstance;
