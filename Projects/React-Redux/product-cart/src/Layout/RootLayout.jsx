import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarPage from '../Components/Navbar/NavbarPage'

const RootLayout = () => {
  return (
    <div>
        <NavbarPage/>
        <Outlet/>
    </div>
  )
}

export default RootLayout