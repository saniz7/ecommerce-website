import React,{useState} from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();

  const [credentials,setCredentials]=useState({email:"",password:"",cpassword:""})
  const handleSubmit=async (e) =>{
    e.preventDefault();
      try{
        console.log(credentials);
        const res=  await axios.post("http://localhost:8000/api/createuser",credentials);
        console.log(res.data);
        navigate("/login")
      }
      catch (error) {
        console.log(error)
    }
  }
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
    <h6>Welcome to E-shop! Please Register.</h6>
  <div className="mb-3">
    
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  placeholder='Please Enter Your Email' value={credentials.email} onChange={onChange}id="email" name='email' aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
 
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" placeholder='Please Enter Your Password' value={credentials.password} onChange={onChange}id="password" name='password'/>
 
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" placeholder='Please Enter Your Password' value={credentials.cpassword} onChange={onChange}id="cpassword" name='cpassword'/>

  <button type="submit" className="btn-login btn-primary">Register</button>
  </div>
  </form>
  </div>
  )
}

export default Register