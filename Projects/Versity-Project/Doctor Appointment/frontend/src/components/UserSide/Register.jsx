import React, { useState } from 'react'
import '../../styles/register.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const navigate=useNavigate()
    const [userData, setUserData] = useState({
        username:"",
        email:"",
        password:"",
        contact:"",
        age:"",
        blood:"",
    })
    console.log(userData)
    const handleChangeInput = (e) => {
        setUserData(prevData=>({
          ...prevData,
          [e.target.name]:e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        axios.post('http://localhost:5000/api/users/register',userData)
        .then((response)=>{
            navigate('/login')
            console.log('Registration successful!', response.data);
        })
        .catch((error) => {
            // Handle any errors that occurred during the POST request
            console.error('Registration failed:', error);
          });

    };
    return (
        <div className='register'>
            <div className="form-container">
                <h1 className='register-title'>Register Page</h1>
                <form className='myForm' onSubmit={handleSubmit}>
                    <div className="username inputField">
                        <label>UserName</label>
                        <input type="text" name='username' className='username' onChange={handleChangeInput}
                            placeholder='enter your user name'
                            value={userData.username}
                        />
                    </div>
                    <div className="email inputField">
                        <label>Email</label>
                        <input type="email" name='email' className='email' onChange={handleChangeInput}
                            placeholder='enter your email address'
                            value={userData.email}
                        />
                    </div>
                    <div className="password inputField">
                        <label>Password</label>
                        <input type="password" name='password' className='password' onChange={handleChangeInput}
                            placeholder='enter your password'
                            value={userData.password}
                        />
                    </div>
                    <div className="contact inputField">
                        <label>Contact Number</label>
                        <input type="text" name='contact' className='contact' onChange={handleChangeInput}
                            placeholder='enter your contact number'
                            value={userData.contact}
                        />
                    </div>
                    <div className="age inputField">
                        <label>Age</label>
                        <input type="text" name='age' className='age' onChange={handleChangeInput}
                            placeholder='enter your age'
                            value={userData.age}
                        />
                    </div>
                    <div className="blood-select inputField">
                        <select name="blood" id="" onChange={handleChangeInput} value={userData.blood}>
                            <option value="" disabled selected>
                                Select your blood group
                            </option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="register-btn">
                        <Button type='submit' className='btn'>Register</Button>
                    </div>

                    <p>Already have an account?<Link to="/login" className='login-page'>Login</Link>Here</p>
                </form>
            </div>
        </div>
    )
}

export default Register