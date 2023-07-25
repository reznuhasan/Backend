import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import AdminLayout from "./layout/AdminLayout"
import AddDoctor from "./components/Admin/AddDoctor"
import UserLayout from "./layout/UserLayout"
import Doctors from "./components/UserSide/Doctors"
import Home from "./components/UserSide/Home"


function App() {
  const router=createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<UserLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="doctors" element={<Doctors/>}/>
      </Route>
     <Route path="admin" element={<AdminLayout/>}>
      <Route path="add" element={<AddDoctor/>}/>
     </Route>
    </Route>
  ]))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
