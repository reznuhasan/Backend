import axios from "axios";
import { useState } from "react"

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [image,setImage]=useState(null);
  const handleChanged = (e) => {
    setInputs((prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    })))
  }
  const handleImaged=(e)=>{
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formetData=new FormData();
    formetData.append('name',inputs.name)
    formetData.append('email',inputs.email)
    formetData.append('password',inputs.password)
    formetData.append('profile',image)
    const res=await axios.post(`http://localhost:7000/api/v1/rizwan/users/register`,formetData,{
      headers:{
        "Content-Type":"multipart/form-data",
      }
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={inputs.name} onChange={handleChanged} />
        <input type="email" name="email" value={inputs.email} onChange={handleChanged} />
        <input type="password" name="password" value={inputs.password} onChange={handleChanged} />
        <input type="file" name="profile" onChange={handleImaged} />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
