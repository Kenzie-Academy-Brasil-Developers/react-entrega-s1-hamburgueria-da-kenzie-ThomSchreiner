import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
        <App />
    </React.StrictMode>
);