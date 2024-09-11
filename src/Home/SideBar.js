import React, { useState } from 'react';
import Dashboard from '../Components/Dashboard';
import Student from '../Components/Students';
import Class from '../Components/Class';
import Attendance from '../Components/Attendance';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/store';



const Sidebar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
    
  const [ShowComponent, setShowComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (ShowComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Student':
        return <Student />;
      case 'Class':
        return <Class />;
      case 'Attendance':
        return <Attendance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='side-contents'>
    
      <div className="sidebar-container">
            <div className="sidebar-item" onClick={() => setShowComponent('Dashboard')}><img className='sidebar-icon' src='https://www.svgrepo.com/show/520684/dashboard.svg'></img>Dashboard</div>
            <div className="sidebar-item" onClick={() => setShowComponent('Student')}><img className='sidebar-icon' src='https://www.svgrepo.com/show/478630/student-person.svg'></img>Student</div>
            <div className="sidebar-item" onClick={() => setShowComponent('Class')}><img className='sidebar-icon' src='https://www.svgrepo.com/show/483480/personal-network-2.svg'></img>Class</div>
            <div className="sidebar-item" onClick={() => setShowComponent('Attendance')}><img className='sidebar-icon' src='https://www.svgrepo.com/show/159174/objective.svg'></img>Attendance</div>
      </div>
      <div className='Content-body-box'>
          <div>
            <NavBar/>
          </div>
          <div>
            <div className="content-container">
                {renderComponent()}
            </div>
          </div> 
      </div>
      
    </div>
  );
};

export default Sidebar;
