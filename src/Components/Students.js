import React from 'react';

const student = [
  { name: 'Kabir', class: 'BCA', dob: '28-09-2000', section: 'B' },
  { name: 'Ojas', class: 'BCA', dob: '2005-07-22', section: 'B' },
  { name: 'Prashansa ', class: 'BCA', dob: '17-08-2002', section: 'A' },

];

const Student = () => {
  return (
    <div className="student-container">
      {student.map((student, index) => (
        <div key={index} className="student-card">
          <h3>{student.name}</h3>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>Date of Birth:</strong> {student.dob}</p>
          <p><strong>Section:</strong> {student.section}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
