import Hero from "../components/Hero";
import AboutMe from "./AboutMe";
import ProjectsPage from "./Projects";
import ContactMe from "./ContactMe";

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
    </div>
  );
};

export default HomePage;
