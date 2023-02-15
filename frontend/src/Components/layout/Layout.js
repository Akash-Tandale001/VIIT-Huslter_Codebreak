import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../helper/Loader";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet></Outlet>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
