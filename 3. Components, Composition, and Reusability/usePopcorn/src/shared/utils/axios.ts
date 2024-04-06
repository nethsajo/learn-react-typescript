import axios from 'axios';

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
      config.headers.Authorization = `Bearer ${process.env.TMDB_ACCESS_TOKEN}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const instance = PrivateInstance;
