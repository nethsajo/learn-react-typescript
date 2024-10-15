import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import AppVOne from './App-v1';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppVOne />
  </React.StrictMode>
);
