import React from 'react'
import NavBar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import CriterionDetail from "../Subpages/CriterionDetail";

const CriterionPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <CriterionDetail />
      <Footer />
    </>
  )
}

export default CriterionPage