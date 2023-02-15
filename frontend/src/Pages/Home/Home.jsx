import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import HeroCarausel from '../../Components/HeroSection/HeroCarausel'
import Login from '../SignIn/pages/Login'
import Signup from '../SignIn/pages/SignUp'

const Home = () => {
  console.log("wtf")
  return (
   
    <>
     <div>
      <NavBar/>
    </div>
    <HeroCarausel/>
    <Login/>
    <Signup/>
    </>
  )
}

export default Home;
