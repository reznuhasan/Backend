import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaCamera } from "react-icons/fa6";

import './App.css'
import axios from 'axios';

function App() {
  const imageUpload=useRef(null)
  const [userImage,setUserImage] = useState("")
  const [inputs,setInputs]=useState({
    name:"",
    email:"",
  })
  const handleImageUpload=()=>{
    imageUpload.current.click();
  }
  const handleImageChange=async(e)=>{
   const imageURL=e.target.files[0];
   const formate=new FormData();
   formate.append('profile',imageURL)
   try {
    const res=await axios.post(`http://localhost:5000/api/v1/images/`,formate)
    console.log(res.data.image)
    setUserImage(res.data.image)
   } catch (error) {
    console.log("image upload failed")
   }
  }
  const handelSubmit=async(e)=>{
    e.preventDefault();
    const user={
      name:inputs.name,
      email:inputs.email,
      imageProfile:userImage
    }
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/users/register`,user);
      setInputs({
        name:"",
    email:"",
    imageProfile:"",
      })
      console.log(res.data)
    } catch (error) {
      console.log('user register failed')
    }
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div onClick={handleImageUpload}>
        <FaCamera />
          <input ref={imageUpload} onChange={handleImageChange} type="file" name="profile" id="" style={{"display":"none"}}/>
        </div>
        <input type="text" name="name" value={inputs.name} onChange={(e)=>setInputs(prevState=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))} /> <br/>
        <input type="email" name="email" value={inputs.email} onChange={(e)=>setInputs(prevState=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))} /><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
