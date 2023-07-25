import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../components/UserSide/Headers'

const UserLayout = () => {
  return (
    <div>
        <Headers/>
        <Outlet/>
    </div>
  )
}

export default UserLayout