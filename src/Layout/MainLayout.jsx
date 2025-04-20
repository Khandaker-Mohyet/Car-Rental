import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useThemeStore } from "../Store/useThemStore";


const MainLayout = () => {
  const {theme}= useThemeStore()
  return (
    <div data-theme={theme}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;