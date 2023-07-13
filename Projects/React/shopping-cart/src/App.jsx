import React from 'react'
import "../src/styles/app.scss"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './components/Home'
import Carts from './components/Carts'
const App = () => {
  const router=createBrowserRouter(createRoutesFromElements([
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Carts/>}/>
    </Route>
  ]))
  return (
    <div>
       <RouterProvider router={router}/>
   </div>
  )
}

export default App