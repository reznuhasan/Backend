import React from 'react'
import '../../styles/login.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Login = () => {
    const handleChangeInput = (e) => {
        console.log(e.target.name, e.target.value)
    }
    return (
        <div className='login'>
            <div className="login-container">
                <h1 className='login-title'>Login Here</h1>
                <form className='login-form'>
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
                    <div className="login-btn">
                        <Button className='btn'>login</Button>
                    </div>

                    <p>create new an account?<Link to="/register" className='register-page'>create</Link>Here</p>
                </form>
            </div>
        </div>
    )
}

export default Login