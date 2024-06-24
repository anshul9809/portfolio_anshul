import React from 'react';
import './App.css';
import "./theme.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>dashboard</div>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
