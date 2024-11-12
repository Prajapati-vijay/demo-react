// src/components/Students.js
import React, { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from FastAPI backend
    fetch('http://djr.local/fast2/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Students data from Fast API</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.age}) - Grade: {student.grade}, City: {student.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;