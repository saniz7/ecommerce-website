import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("credentials")
      const res = await axios.post("http://localhost:8000/api/login", credentials);
      console.log(res.data.authtoken);
      const json = await res.data
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        navigate("/");

      }
    }
    catch (error) {
      alert("Invalid credentials");
      console.log(error)
    }


  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  console.log(credentials);


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h6>Welcome to E-shop! Please Login.</h6>
        <div className="mb-3">

          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='Please Enter Your Email' value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />

          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeholder='Please Enter Your Password' id="password" name="password" />

          {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <button type="submit" className="btn-login btn-primary" >Submit</button>
        </div>
        <p>Don't have an account?<button className='btn-login btn-primary'><Link to='/Register' style={{ color: 'white', textDecoration: 'none' }}> Create now</Link></button></p>
      </form>
    </div>
  )
}

export default Login