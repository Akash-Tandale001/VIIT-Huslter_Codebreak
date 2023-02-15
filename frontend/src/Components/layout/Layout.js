import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Loader from '../../helper/Loader';
import Footer from "../Footer/Footer"
import NavBar from '../Navbar/NavBar'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <Suspense fallback={<Loader />}>
    <Outlet></Outlet>
    </Suspense>
    <Footer/>
    </>
  )
}

export default Layout
