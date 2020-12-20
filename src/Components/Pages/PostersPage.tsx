import React from 'react'
import NavBar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import PosterDetail from "../Subpages/PosterDetail";

const PostersPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <PosterDetail />
      <Footer />
    </>
  )
}

export default PostersPage