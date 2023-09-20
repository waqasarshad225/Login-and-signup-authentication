import Navbar from './Components/Navbar'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route element={<Dashboard/>} path='/dashboard'/>
        <Route path="/" element={<Home/>}/>
        
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
