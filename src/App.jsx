import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

const routes = createBrowserRouter([
  {path:"/login",
    element:<Login/>
  },
  {path:"/dashboard",
    element:<Home/>
  },
  {path:"/signup",
    element:<SignUp/>
  },

])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
