import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Loader from '../../helper/Loader';
import Navbar from '../Navbar/NavBar.jsx';
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<Loader />}>
    <Outlet></Outlet>
  </Suspense>
  <Footer/>
    
    </>
  )
}

export default Layout
