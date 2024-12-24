import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AvailableCars from "../Pages/AvailableCars";
import AddCar from "../Pages/AddCar";
import MyCars from "../Pages/MyCars";
import MyBookings from "../Pages/MyBookings";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Details from "../Components/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/car')
      },
      {
        path: "/availableCars",
        element: <AvailableCars></AvailableCars>,
        loader: ()=> fetch('http://localhost:5000/car')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/car/${params.id}`)
      },
      {
        path: "/addCar",
        element: <PrivateRoute><AddCar></AddCar></PrivateRoute>,
      },
      {
        path: "/myCars",
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>,
      },
      {
        path: "/myBookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      },
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
       path: "/auth/login",
       element: <LogIn></LogIn>,
      },
      {
       path: "/auth/register",
       element: <Register></Register>
      },
          
    ]
  },
]);

export default router;