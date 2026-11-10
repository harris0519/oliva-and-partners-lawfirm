import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// Keep previously shared hash links working after switching to clean URLs.
if (window.location.hash.startsWith('#/')) {
  const route = window.location.hash.slice(2);
  window.history.replaceState(null, '', `${window.location.origin}${import.meta.env.BASE_URL}${route}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
