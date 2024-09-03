import React, { useState, useEffect } from 'react';


const Attendance = () => {
  const [studentName, setStudentName] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [className, setClassName] = useState('');
  const [status, setStatus] = useState('Present'); 

  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

 

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>
      <form  className="attendance-form">
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentDate">Current Date:</label>
          <input
            type="date"
            id="currentDate"
            value={currentDate}
         
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="className">Class:</label>
          <input
            type="text"
            id="className"
            value={className}
          
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <div className="status-options">
            <label>
              <input
                type="radio"
                name="status"
                value="Present"
                
               
              />
              Present
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="Absent"
                checked={status === 'Absent'}
              
              />
              Absent
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Attendance;
