import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/Logo.png'


const Navbar = () => {
  const { user, singInOut } = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100 md:px-8 mx-auto top-0 sticky z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/"><li><a>Home</a></li></NavLink>
            <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/availableCars"><li><a>Available Cars</a></li></NavLink>
            {
              user && <>
                <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/addCar"><li><a>Add Car</a></li></NavLink>
                <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/myCars"><li><a>My Cars</a></li></NavLink>
                <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/myBookings"><li><a>My Bookings</a></li></NavLink>
              </>
            }
          </ul>
        </div>
        <img className="hidden md:block w-24 h-20 my-auto" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/"><li><a>Home</a></li></NavLink>
          <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/availableCars"><li><a>Available Cars</a></li></NavLink>
          {
            user && <>
              <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/addCar"><li><a>Add Car</a></li></NavLink>
              <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/myCars"><li><a>My Cars</a></li></NavLink>
              <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}`} to="/myBookings"><li><a>My Bookings</a></li></NavLink>
            </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className={'btn btn-sm gap-2 transition-colors mr-4'} to="/settingsPage">Theme</NavLink>
        {user && user.email ? (
          <div className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] rounded-full mr-3">
            <img
              title={`${user.displayName}`}
              className="w-12 h-12 rounded-full bg-white object-cover"
              src={user.photoURL}
              alt="User"
            />
          </div>
        ) : ""}
        {
          user && user?.email ? <button onClick={singInOut} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all">Log out</button> : <Link to="/auth/Login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;