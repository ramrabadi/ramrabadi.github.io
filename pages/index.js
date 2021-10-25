import Container from "../components/Container";
import Contact from "../components/Contact";
import Projects from "../components/Project";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Container>
  );
}
