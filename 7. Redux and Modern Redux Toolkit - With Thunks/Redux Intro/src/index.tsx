import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import App from './App';

import './store';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
