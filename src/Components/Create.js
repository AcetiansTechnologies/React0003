// src/components/RegistrationPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://reqres.in/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Redirect to login page after successful registration
          navigate('/');
        } else {
          setError(data.error || 'Registration failed');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      }
    };

  return (
    <div className="registration-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
      <div className="name-wrapper">
                        <label className="name-label">Email *</label>
                        <input
                        className="name-input"
                        type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                required
                        />
                    </div>
                    <div className="name-wrapper">
                        <label className="name-label">Password *</label>
                        <input
                        className="name-input"
                        type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                    
                        />
                    </div>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Already have an account? <a href="/">Login here</a></p>
    </div>
  );
};

export default Create;



