import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Error404 from './pages/Error/Error404'

const routes = createBrowserRouter([
  {path:"/",
    element:<Login/>
  },
  {path:"/dashboard",
    element:<Home/>
  },
  {path:"/signup",
    element:<SignUp/>
  },
  {
    path:"*",
    element:<Error404/>
  }

])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
