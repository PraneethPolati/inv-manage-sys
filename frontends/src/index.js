import React from 'react';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>      
       <App />
    </AuthProvider>
  </React.StrictMode>,
  
);
