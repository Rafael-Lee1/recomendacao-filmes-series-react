import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Substitua ReactDOM.render por createRoot
const container = document.getElementById('root');
const root = createRoot(container); // Crie uma raiz

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
