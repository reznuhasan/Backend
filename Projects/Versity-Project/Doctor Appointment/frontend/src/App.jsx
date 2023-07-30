import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import AdminLayout from "./layout/AdminLayout"
import AddDoctor from "./components/Admin/AddDoctor"
import UserLayout from "./layout/UserLayout"
import Doctors from "./components/UserSide/Doctors"
import Home from "./components/UserSide/Home"
import Register from "./components/UserSide/Register"
import Login from "./components/UserSide/Login"
import DoctorPrivate from "./layout/DoctorPrivate"
import DoctorDetails from "./components/UserSide/DoctorDetails"
import Error from "./components/UserSide/Error"
import Hospital from "./components/UserSide/Hospital"
import Suggestion from "./components/UserSide/Suggestion"
import HelpLine from "./components/UserSide/HelpLine"


function App() {
  const router=createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<UserLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route exact path="doctors" element={<Doctors/>}/>
        <Route path="/doctors" element={<DoctorPrivate/>}>   
          <Route exact path=":name" element={<DoctorDetails/>}/>
        </Route>
        <Route path="/hospital" element={<Hospital/>}></Route>
        <Route path="/suggestion" element={<Suggestion/>}></Route>
        <Route path="/helpline" element={<HelpLine/>}></Route>
        <Route path="*" element={<Error/>}></Route>
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
