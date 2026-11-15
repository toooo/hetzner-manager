import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../hetzner_cloud_manager.tsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
