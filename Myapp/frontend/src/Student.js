import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./student.css"

function Student() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => {
        if (Array.isArray(res.data)) {
          setStudent(res.data);
        } else {
          console.error("Response data is not an array:", res.data);
          setStudent([]);
        }
      })
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className='studentDiv'>
      <div className='innerStudentDiv'>
        <Link to="/create" className='btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>
                  <button className='actionButton'>Update</button>
                  <button className='actionButton'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
