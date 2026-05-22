import { motion } from "framer-motion";

import { trustedCompanies, processSteps } from "../data/testimonials";

import { fadeUp, staggerContainer } from "../animations/motion";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="
      relative
      py-32
      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-125
        h-125
        bg-cyan-500/10
        blur-3xl
        rounded-full
        "
      />

      <div className="container-custom relative z-10">
        {/* SECTION HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          text-center
          max-w-3xl
          mx-auto
          mb-20
          "
        >
          <p
            className="
            text-cyan-400
            uppercase
            tracking-widest
            font-medium
            mb-4
            "
          >
            Our Working Process
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-6
            "
          >
            How We Help
            <span className="gradient-text"> Businesses Grow Online</span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            A simple but powerful process focused on branding, lead generation,
            marketing performance, and long-term business growth.
          </p>
        </motion.div>

        {/* PROCESS CARDS */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          grid
          md:grid-cols-2
          gap-8
          mb-24
          "
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                relative
                glass-effect
                rounded-[30px]
                p-8
                border
                border-white/10
                overflow-hidden
                group
                "
              >
                {/* CARD GLOW */}

                <div
                  className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-cyan-500/10
                  blur-3xl
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  "
                />

                {/* STEP NUMBER */}

                <div
                  className="
                  absolute
                  top-6
                  right-6
                  text-5xl
                  font-bold
                  text-white/5
                  "
                >
                  0{index + 1}
                </div>

                {/* ICON */}

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  mb-6
                  relative
                  z-10
                  "
                >
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>

                {/* TITLE */}

                <h3
                  className="
                  text-2xl
                  font-semibold
                  mb-4
                  relative
                  z-10
                  "
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  text-gray-400
                  leading-relaxed
                  relative
                  z-10
                  "
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* TRUSTED PLATFORMS */}

        <div
          className="
          relative
          overflow-hidden
          "
        >
          {/* LEFT FADE */}

          <div
            className="
            absolute
            left-0
            top-0
            w-32
            h-full
            bg-linear-to-r
            from-[#0B0F19]
            to-transparent
            z-10
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
            absolute
            right-0
            top-0
            w-32
            h-full
            bg-linear-to-l
            from-[#0B0F19]
            to-transparent
            z-10
            "
          />

          {/* MARQUEE */}

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            flex
            gap-6
            w-max
            "
          >
            {[...trustedCompanies, ...trustedCompanies].map(
              (company, index) => (
                <div
                  key={index}
                  className="
                  glass-effect
                  px-8
                  py-5
                  rounded-2xl
                  border
                  border-white/10
                  text-lg
                  font-medium
                  text-gray-300
                  whitespace-nowrap
                  "
                >
                  {company}
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
