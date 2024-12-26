import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppContextProvider from './context/AppContext';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    </BrowserRouter>

);
