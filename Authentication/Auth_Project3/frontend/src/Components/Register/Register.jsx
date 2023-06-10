import { useState } from "react";
import './Register.css'
const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser={
            name:name,
            email:email,
            password:password
        }
        setName("");
        setEmail("");
        setPassword("")
        fetch('http://localhost:5000/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser),
        }).then((response) => response.json())
        .then((responseData) => {
          console.log("Data sent to server:", responseData);
        })
        .catch((error) => {
          console.log("Error sending data to server:", error);
        });
        
    }
    return(
        <div className="register">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} placeholder="enter your name" onChange={handleName}/>
                <label>Email:</label>
                <input type="email" value={email} placeholder="enter your email" onChange={handleEmail}/>
                <label>Password:</label>
                <input type="password" value={password} placeholder="enter your password" onChange={handlePassword}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Register;