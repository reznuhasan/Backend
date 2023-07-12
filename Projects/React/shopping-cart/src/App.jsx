import React from 'react'
import "../src/styles/app.scss"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './components/Home'
import Cart from './components/Cart'
const App = () => {
  const router=createBrowserRouter(createRoutesFromElements([
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  ]))
  return (
    <div>
       <RouterProvider router={router}/>
   </div>
  )
}

export default App