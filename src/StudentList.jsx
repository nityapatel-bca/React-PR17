import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>City: {student.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;