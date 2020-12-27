import React from 'react'
import NavBar from "../Modules/Navbar";
import Landing from "../Subpages/Landing";
import Footer from "../Modules/Footer";
import ProjectsList from "../Subpages/ProjectsList";
import Contact from "../Subpages/Contact";
import FeaturedProject from "../Subpages/FeaturedProject";

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <FeaturedProject />
      <ProjectsList />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage