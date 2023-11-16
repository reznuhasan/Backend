import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [profile,setProfile]=useState("")
  const handleInput = (e) => {
    setInput(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleProfile=(e)=>{
     const file=e.target.files[0];
     const reader=new FileReader();
     if(file){
      reader.readAsDataURL(file)
      reader.onloadend=()=>{
        setProfile(reader.result)
      }
     }else{
      setProfile("");
     }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const user={
      ...input,
      profile:profile,
    }
    const res=await axios.post("http://localhost:8000/api/v1/user/register",user)
    console.log(res.data)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={input.name} onChange={handleInput} /><br />
        <input type="email" name="email" value={input.email} onChange={handleInput} /><br />
        <input type="password" name="password" value={input.password} onChange={handleInput} /><br />
        <input type="file" name="profile" accept='image/*' onChange={handleProfile}/><br />
        <button type='submit'>Submit</button>
      </form>

    </>
  )
}

export default App
