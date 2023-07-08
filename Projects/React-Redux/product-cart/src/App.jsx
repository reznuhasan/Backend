import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Home from "./Components/Home/Home"
import Products from "./Components/Products/Products"
import ItemDetails from "./Components/CartDetails/ItemDetails"


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/items/:title" element={<ItemDetails/>}/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
