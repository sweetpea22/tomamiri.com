import React from 'react'
import NavBar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import CadenciaDetail from "../Subpages/CadenciaDetail";

const CadenciaPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <CadenciaDetail />
      <Footer />
    </>
  )
}

export default CadenciaPage