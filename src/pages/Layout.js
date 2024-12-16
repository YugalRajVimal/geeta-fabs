import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import LandingPageBackground from "./LandingPageBackground";

const Layout = () => {
  return (
    <>
      <div className="relative">
        {/* <LandingPageBackground /> */}
        <div className="h-screen relative w-full z-[30]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
