import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Home from './pages/Home/Home';
import User from './pages/User/User';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id" element={<User/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
