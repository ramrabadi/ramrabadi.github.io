import React from "react";
import ProjectsComponent from "../components/ProjectsComponent";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function projects() {
  return (
    <div>
      <Container>
        <Navbar />
        <ProjectsComponent />
      </Container>
    </div>
  );
}
