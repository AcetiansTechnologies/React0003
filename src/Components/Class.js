import React, { useState } from 'react';


const Class = () => {

  return (
    <div className="class-container">
      <h2>Add New Student</h2>
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
          <label htmlFor="className">Class:</label>
          <input
            type="text"
            id="className"
            
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"   
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Class;
