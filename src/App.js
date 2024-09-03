import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Home from './Home/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path = "/home" element={<Home home = "home"/>}/>

    </Routes>
    </Router>
  );
}

export default App;
