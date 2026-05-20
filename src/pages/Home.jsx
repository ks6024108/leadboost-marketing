import Button from "../components/ui/Button";
import SectionTitle from "../components/common/SectionTitle";

const Home = () => {
  return (
    <main>
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="LeadBoost Marketing"
            title="Premium Digital Growth Agency"
          />

          <div className="flex justify-center">
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
