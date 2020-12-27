import React from 'react'
import NavBar from "../Modules/Navbar";
import Landing from "../Subpages/Landing";
import Footer from "../Modules/Footer";
import ProjectsList from "../Subpages/ProjectsList";
import Contact from "../Subpages/Contact";

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <ProjectsList />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage