import React, { useEffect, useState } from 'react';
import '../../styles/login.css';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  
  useEffect(()=>{
    const auth=localStorage.getItem("token")
    if(auth){
      navigate('/doctors')
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users/login', userData)
      .then((response) => {
        localStorage.setItem("token",response.data.token)
        console.log(response.data)
        console.log('User logged in successfully',);
        // Update the authentication state to true
        alert("User logged in successfully");
        navigate("/doctors"); // Redirect to a protected route after successful login
      })
      .catch((err) => {
        console.error('Error logging in:', err);
        // Add proper error handling and display error messages to the user
        alert('Login failed. Please try again.');
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Login Here</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="email inputField">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              className="email"
              onChange={handleChangeInput}
              placeholder="enter your email address"
            />
          </div>
          <div className="password inputField">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              className="password"
              onChange={handleChangeInput}
              placeholder="enter your password"
            />
          </div>
          <div className="login-btn">
            <Button type="submit" className="btn">
              Login
            </Button>
          </div>

          <p>
            Create a new account? <Link to="/register" className="register-page">Create</Link> Here
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
