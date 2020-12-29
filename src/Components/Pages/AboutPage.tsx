import React from 'react'
import NavBar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import AboutMe from "../Subpages/AboutMe";
import Contact from "../Subpages/Contact";


const AboutPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}

export default AboutPage