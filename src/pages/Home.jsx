import Navbar from "../components/common/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Portfolio />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
};

export default Home;

// <Contact />
