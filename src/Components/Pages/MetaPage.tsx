import React from 'react'
import NavBar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import MetaDetail from "../Subpages/MetaDetail";

const MetaPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <MetaDetail />
      <Footer />
    </>
  )
}

export default MetaPage