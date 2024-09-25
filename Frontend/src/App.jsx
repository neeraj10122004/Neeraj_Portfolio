import { createBrowserRouter,RouterProvider } from "react-router-dom"
import {Home,Contact,Resume,Work} from './pages'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/Contact',
      element: <Contact/>
    },
    {
      path: '/Resume',
      element: <Resume/>
    },
    {
      path: '/Work',
      element: <Work/>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
