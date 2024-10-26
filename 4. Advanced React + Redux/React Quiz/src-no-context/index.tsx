import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { QuizProvider } from 'shared/contexts/quiz';
import App from './App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
