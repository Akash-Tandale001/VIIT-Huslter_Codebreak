import React from 'react'
import HeroCarausel from '../../Components/HeroSection/HeroCarausel'
import Login from '../SignIn/pages/Login'
import Signup from '../SignIn/pages/SignUp'

const Home = () => {
  return (
    <>
    <HeroCarausel/>
    <Login/>
    <Signup/>
    </>
  )
}

export default Home;
