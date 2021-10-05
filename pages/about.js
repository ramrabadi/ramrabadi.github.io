import React from "react";
import AboutComponent from "../components/AboutComponent";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function portfolio() {
  return (
    <div>
      <Container>
        <Navbar />
        <AboutComponent />
      </Container>
    </div>
  );
}
