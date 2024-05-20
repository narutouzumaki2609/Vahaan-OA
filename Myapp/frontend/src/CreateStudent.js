import React, { useState } from 'react';
import axios from 'axios';
import "./CreateStudent.css";
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:3000/create', {name, email})
      .then(res =>{
        console.log(res);
        navigate('/');
      }).catch(err =>console.log(err));
    }

  return (
   <div className='body'>
    <div class="form-container">
    <h1>Add a Student</h1>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter Name' required onChange={e=>setName(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter Email' required onChange={e=>setEmail(e.target.value)}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
   </div>
  )
}

export default CreateStudent;