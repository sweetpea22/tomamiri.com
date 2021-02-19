import React from 'react'
import NavBar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import PaladinDetail from "../Subpages/PaladinDetail";

const PaladinPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <PaladinDetail />
      <Footer />
    </>
  )
}

export default PaladinPage