import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Home from './Home/Home';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Home />} />
        <Route path="/logout" element={isAuthenticated ? <Home /> : <LoginPage />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
