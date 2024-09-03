import React, { useState } from 'react';
import Dashboard from '../Components/Dashboard';
import Student from '../Components/Students';
import Class from '../Components/Class';
import Attendance from '../Components/Attendance';

const Sidebar = () => {
    
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
        <div className="sidebar-item" onClick={() => setShowComponent('Dashboard')}>Dashboard</div>
        <div className="sidebar-item" onClick={() => setShowComponent('Student')}>Student</div>
        <div className="sidebar-item" onClick={() => setShowComponent('Class')}>Class</div>
        <div className="sidebar-item" onClick={() => setShowComponent('Attendance')}>Attendance</div>
      </div>
      <div className="content-container">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Sidebar;
