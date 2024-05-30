import React from 'react';
import './index.css';
import App from './App';
import { TodoContextProvider } from './context';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
);
