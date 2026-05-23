import { motion } from "framer-motion";

const steps = [
  "Business Research & Strategy",
  "Brand Positioning & Planning",
  "Design & Development",
  "Marketing Launch & Optimization",
];

const Workflow = () => {
  return (
    <section className="relative">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            How We Build
            <span className="gradient-text"> Digital Growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="
              glass-effect
              border
              border-white/10
              rounded-[30px]
              p-8
              relative
              overflow-hidden
              "
            >
              <div
                className="
                absolute
                top-0
                right-0
                w-28
                h-28
                bg-cyan-400/10
                blur-3xl
                rounded-full
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  text-xl
                  font-bold
                  mb-6
                  "
                >
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold leading-snug">{step}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
