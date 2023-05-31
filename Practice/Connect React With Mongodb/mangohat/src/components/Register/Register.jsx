import React, { useState } from "react";
import styles from './register.module.css';
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const handleName = (e) => {
        setName(e.target.value);
        e.target.value = ""
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value = ""
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        e.target.value = ""
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
        e.target.value = ""
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`http://localhost:5000/api/user`,{
            method:"POST",
            body:JSON.stringify({
                name:name,
                email:email,
                password:password,
                phone:phone
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=await response.json();
    }
    return (
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="enter your name" value={name} onChange={handleName} />
                    <input type="email" name="email" placeholder="enter your email" value={email} onChange={handleEmail} />
                    <input type="password" name="password" placeholder="enter your password" value={password} onChange={handlePassword} />
                    <input type="text" name="phone" placeholder="enter your contact" value={phone} onChange={handlePhone} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Register;