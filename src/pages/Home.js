import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Games from "../components/Games";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Games />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
