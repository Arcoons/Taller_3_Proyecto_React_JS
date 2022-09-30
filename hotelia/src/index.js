import React from 'react';

import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registro from './pages/registro/Registro';
import Login from './pages/login/Login.js';



import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/registro' element={<Registro />}></Route>
    </Routes>
  </BrowserRouter>
  
    
  
);


