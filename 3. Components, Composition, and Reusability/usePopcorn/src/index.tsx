import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import WatchMovieProvider from 'shared/contexts/movie/use-movie-context';

import App from './App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchMovieProvider>
        <App />
      </WatchMovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
