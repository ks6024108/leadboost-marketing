import Navbar from "../components/common/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";

const Home = () => {
  return (
    <main>
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Portfolio />
    </main>
  );
};

export default Home;
