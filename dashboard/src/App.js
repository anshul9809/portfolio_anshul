import React, { useEffect } from 'react';
import './App.css';
import "./theme.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { getUser } from './store/slices/userSlice';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPasswod/ResetPassword';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser())
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword/>} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </BrowserRouter>
  );
}

export default App;
