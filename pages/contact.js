import React from "react";
import ContactComponent from "../components/ContactComponent";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function contact() {
  return (
    <div>
      <Container>
        <Navbar />
        <ContactComponent />
      </Container>
    </div>
  );
}
