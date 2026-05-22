import ContactCTA from "../components/contact/ContactCTA";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />

      <Services limit={3} />

      <About />

      <Portfolio />

      <Testimonials />

      <ContactCTA />
    </main>
  );
};

export default Home;

// <Contact />
