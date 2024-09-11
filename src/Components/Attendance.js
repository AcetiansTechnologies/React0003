import React from 'react';


const Attendance = () => {

  
  return (
    <div className="class-container">
      <h2>Mark Attendance</h2>
      <form className="class-form">
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentDate">Current Date:</label>
          <input
            type="date"
            id="currentDate"
        
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="className">Class:</label>
          <input
            type="text"
            id="className"
           
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
