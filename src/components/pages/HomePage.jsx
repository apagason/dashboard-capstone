import React from "react";
import Hero from "../Hero";
import NavbarHome from "../NavbarHome";
import Activities from "../Activities";
import Discover from "../Discover";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <NavbarHome />
      <Hero />
      <Activities />
      <Discover />
      <Footer />
    </>
  );
}
