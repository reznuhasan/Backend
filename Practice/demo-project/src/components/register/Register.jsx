import React, { useState } from "react";

const Register=()=>{
    const [form,setForm]=useState({});
    const handleForm=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await fetch(`http://localhost:5000/user`,{
            method:"POST",
            body:JSON.stringify(form),
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    return(
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="enter your name" onChange={handleForm}/>
                <input type="email" name="useremail" placeholder="enter your email" onChange={handleForm}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Register;