import React from 'react'; // React korrekt importieren
import ReactDOM from 'react-dom/client'; // ReactDOM aus 'react-dom/client' importieren
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter für Routing
import './index.css';
import App from './App.tsx';

// ReactDOM.createRoot verwenden, um die App im 'root'-Element zu rendern
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

