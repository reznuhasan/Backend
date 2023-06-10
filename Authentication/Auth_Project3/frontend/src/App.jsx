import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
