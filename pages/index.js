import Container from "../components/Container";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <Container>
      <Intro />
      <Contact />
      <Projects />
      <Footer />
    </Container>
  );
}
