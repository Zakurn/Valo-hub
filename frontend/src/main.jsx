import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
  
const router = createBrowserRouter([
  {path:"/",element:<Login/>},
  {path:"/register",element:<Register/>},
  {path:"/home",element:<Home/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
