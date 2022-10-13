import React from "react";
import Hero from "../Hero";
import NavbarHome from "../NavbarHome";
import Profile from "../Profile";
import Activities from "../Activities";

export default function HomePage() {
  return (
    <>
      <NavbarHome />
      <Hero />
      <Profile />
      <Activities />
    </>
  );
}
