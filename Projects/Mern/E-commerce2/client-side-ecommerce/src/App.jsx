
import Navbar from './features/navbar/Navbar'
import ProductList from './features/product-list/ProductList'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "login",
      element:(
        <LoginPage/>
      )
    },
    {
      path: "signup",
      element:(
        <SignupPage/>
        )
    },
  ]);
  return (
    <>

    <RouterProvider router={router}/>
     {/* <BrowserRouter>
     <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Route>
     </Routes>
     </BrowserRouter> */}

     {/* <SignupPage/> */}
      {/* <LoginPage/> */}
      {/* <Home/> */}
    </>
  )
}

export default App
