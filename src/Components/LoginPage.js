import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/store'; // Adjust the import path if necessary

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const errorMessage = useSelector((state) => state.errorMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password)); // Await the dispatch to ensure it completes
      if (isAuthenticated) {
        navigate('/home'); // Navigate only if authenticated
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-body">
      <div className="main-body">
        <div className="login-box">
          <div className="image">
            <img
              src="https://i.ibb.co/ZgWJrWL/Screenshot-2024-08-28-110736.png"
              alt="Screenshot"
              border="0"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="Login-page">
              <p className="login-text">Login</p>
              <p className="under-login-text">See your Growth</p>

              <div>
                <div className="name-wrapper">
                  <label className="name-label">Email </label>
                  <input
                    className="name-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="name-wrapper">
                  <label className="name-label">Password</label>
                  <input
                    className="name-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="forgot-box">
                <div className="Checkbox">
                  <input type="checkbox" className="checkbox" />
                  <label className="checkbox-label">Remember me</label>
                </div>
                <div>
                  <p>Forgot Password</p>
                </div>
              </div>

              <div className="login-button-box">
                <button className='Login-button' type="submit">Login</button>
              </div>
            </div>
          </form>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        <div className="Img"></div>
      </div>
    </div>
  );
};

export default LoginPage;
