import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/style.css';
import { initImageProtection } from './utils/imageProtection';

// Layer 4 — Set session access token on first valid page load
if (!sessionStorage.getItem('access_token')) {
  sessionStorage.setItem('access_token', crypto.randomUUID());
}

// Layer 3 — Global image protection (right-click & drag block)
initImageProtection();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
