import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/index/index' 
import Dashboard from './pages/dasboard/dashboard'
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Dashboard/>
  </React.StrictMode>
);


