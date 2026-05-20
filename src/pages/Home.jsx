import Navbar from "../components/common/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <h1
              className="
              heading-primary
              text-5xl
              md:text-7xl
              text-center
              "
            >
              Premium Digital Agency
            </h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
