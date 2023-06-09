
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Write from "./pages/Write"
import './style.scss'

const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">

 <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
