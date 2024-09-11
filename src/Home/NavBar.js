import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/store';

const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <div className="navbar">
      <div className="user-box">
        <img src="https://th.bing.com/th/id/OIP.B3tNlZ1eBoZdPTzzTM9RbAHaE1?rs=1&pid=ImgDetMain" alt="College Logo" className="college-logo" />
        <h1 className="college-name">MIT</h1>

        <div className="user-box">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      </div>
      
      <div >
      
      </div>
      <div className="user-box">
      
        <img src="https://th.bing.com/th/id/OIP.uENdWhts6kcQrYtY-l2ZBAHaEJ?w=276&h=180&c=7&r=0&o=5&pid=1.7" alt="User" className="user-image" />
        <span className="user-name"><strong>Kabir</strong></span>
        <button className='Logout-button' onClick={handleLogout} 
      > Logout
      </button>
      </div>
    </div>
  );
};

export default Navbar;
