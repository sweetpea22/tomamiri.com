import React from 'react'
import NavBar from "../Modules/Navbar";
import Landing from "../Subpages/Landing";
import Footer from "../Modules/Footer";
import About from "../Subpages/About";


const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Footer />
    </>
  )
}

export default HomePage