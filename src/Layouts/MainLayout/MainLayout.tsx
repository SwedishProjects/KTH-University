import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import TopNavbar from "./TopNavbar/TopNavbar";

function MainLayout() {
  return (
    <>
     <TopNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
