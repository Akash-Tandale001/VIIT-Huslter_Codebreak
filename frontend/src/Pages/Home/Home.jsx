import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'
import HeroCarausel from '../../Components/HeroSection/HeroCarausel'
import Login from '../SignIn/pages/Login'
import Signup from '../SignIn/pages/Signup'

const Home = () => {
  return (
   
    <>
     <div>
      <NavBar/>
    </div>
    <HeroCarausel/>
    
    </>
  )      
  
}

export default Home;
