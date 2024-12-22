import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AvailableCars from "../Pages/AvailableCars";
import AddCar from "../Pages/AddCar";
import MyCars from "../Pages/MyCars";
import MyBookings from "../Pages/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableCars",
        element: <AvailableCars></AvailableCars>,
      },
      {
        path: "/addCar",
        element: <AddCar></AddCar>,
      },
      {
        path: "/myCars",
        element: <MyCars></MyCars>,
      },
      {
        path: "/myBookings",
        element: <MyBookings></MyBookings>,
      },
    ]
  },
]);

export default router;