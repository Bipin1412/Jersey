import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main-offset">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

