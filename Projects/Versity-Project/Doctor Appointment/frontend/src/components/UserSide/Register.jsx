import React from 'react'
import '../../styles/register.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Register = () => {
    const handleChangeInput = () => {
        console.log(e.target.name, e.target.value)
    }
    return (
        <div className='register'>
            <div className="form-container">
            <h1 className='register-title'>Register Page</h1>
            <form className='myForm'>
                <div className="username inputField">
                    <label>UserName</label>
                    <input type="text" name='username' className='username' onChange={handleChangeInput}
                        placeholder='enter your user name'
                    />
                </div>
                <div className="email inputField">
                    <label>Email</label>
                    <input type="email" name='email' className='email' onChange={handleChangeInput}
                        placeholder='enter your email address'
                    />
                </div>
                <div className="password inputField">
                    <label>Password</label>
                    <input type="password" name='password' className='password' onChange={handleChangeInput}
                        placeholder='enter your password'
                    />
                </div>
                <div className="contact inputField">
                    <label>Contact Number</label>
                    <input type="text" name='contact' className='contact' onChange={handleChangeInput}
                        placeholder='enter your contact number'
                    />
                </div>
                <div className="age inputField">
                    <label>Age</label>
                    <input type="text" name='age' className='age' onChange={handleChangeInput}
                        placeholder='enter your age'
                    />
                </div>
                <div className="blood-select inputField">
                    <select name="blood" id="">
                        <option selected>Select your blood group</option>
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
                    <Button className='btn'>Register</Button>
                </div>

                <p>Already have an account?<Link to="/login" className='login-page'>Login</Link>Here</p>
            </form>
            </div>
        </div>
    )
}

export default Register