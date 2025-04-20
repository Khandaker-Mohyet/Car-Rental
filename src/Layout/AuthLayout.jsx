import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useThemeStore } from "../Store/useThemStore";


const AuthLayout = () => {
  const {theme}= useThemeStore()
  return (
    <div data-theme={theme}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;