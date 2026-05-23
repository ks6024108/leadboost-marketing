import About from "../sections/About";

// import BrandStory from "../components/about/BrandStory";
import BrandStory from "../components/about/BrandStory";
import Workflow from "../components/about/Workflow";
import WhyChooseUs from "../components/about/WhyChooseUs";
import VisionSection from "../components/about/VisionSection";

const AboutPage = () => {
  return (
    <main className="pt-24 overflow-hidden">
      <About />

      <div className="space-y-24 pb-24">
        <BrandStory />

        <Workflow />

        <WhyChooseUs />

        <VisionSection />
      </div>
    </main>
  );
};

export default AboutPage;
