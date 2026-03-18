import React from 'react';
import ReactDOM from 'react-dom/client';
// On supprime l'import index.css car on va tout gérer dans App.scss
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import du routeur

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* On entoure App pour activer la navigation */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);