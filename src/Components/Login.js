import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';

   const Login = ()=>{ 
      const [id, setId] = useState('surajkabir@gmail.com');
      const [password, setPassword] = useState('suraj@123');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      useEffect(() => {
            const savedId = localStorage.getItem('id');
            const savedPassword = localStorage.getItem('password');
            if (savedId) setId(savedId);
            if (savedPassword) setPassword(savedPassword);
          }, []);
  
          const handleSubmit = async (e) => {
                e.preventDefault();
            
                try {
                  const response = await fetch('https://reqres.in/api/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: id, password: password })
                  });
            
                  const data = await response.json();
            
                  if (response.ok) {
                    localStorage.setItem('id', id);
                    localStorage.setItem('password', password);
                    navigate('<Home/>');
                  } else {
                    setError(data.error || 'Login failed');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  setError('An error occurred. Please try again later.');
                }
              };


  return (
    <div>
        <p className="login-text">Login</p>
                <p className="under-login-text">See your Grouth</p>
            <form onSubmit={handleSubmit} >
                <div>
                    <div className="name-wrapper">
                        <label className="name-label">Email *</label>
                        <input
                        className="name-input"
                        type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
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
                </div>

                <div className="forgat-box">
                    <div className="Checkbox">
                        <input type="checkbox" className="checkbox"></input>
                        <label className="checkbox">remember</label>
                    </div>
                    <div>
                        <p>Forgat Password</p>
                    </div>
                </div>

                <div className="login-button-box">
                    <button type='submit'> login</button>
                </div>
            </form>
                
                {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Login




const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedId = localStorage.getItem('id');
    const savedPassword = localStorage.getItem('password');
    if (savedId) setId(savedId);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: id, password: password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('id', id);
        localStorage.setItem('password', password);
        navigate('/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

