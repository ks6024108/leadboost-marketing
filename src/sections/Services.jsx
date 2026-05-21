import { motion } from "framer-motion";

import { services } from "../data/services";

import { fadeUp, staggerContainer } from "../animations/motion";

const Services = () => {
  return (
    <section
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
        top-0
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
            font-medium
            mb-4
            tracking-widest
            uppercase
            "
          >
            Our Services
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-6
            "
          >
            Powerful Digital Solutions
            <span className="gradient-text"> For Modern Businesses</span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            We help businesses grow faster with strategic marketing, branding,
            performance advertising, SEO, and ecommerce solutions.
          </p>
        </motion.div>

        {/* SERVICES GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                group
                relative
                glass-effect
                rounded-[28px]
                p-8
                overflow-hidden
                border
                border-white/10
                hover:border-cyan-400/30
                transition-all
                duration-500
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

                {/* ICON */}

                <div
                  className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-white/5
                  border
                  border-white/10
                  mb-6
                  "
                >
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>

                {/* TITLE */}

                <h3
                  className="
                  relative
                  z-10
                  text-2xl
                  font-semibold
                  mb-4
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  relative
                  z-10
                  text-gray-400
                  leading-relaxed
                  "
                >
                  {service.description}
                </p>

                {/* HOVER LINE */}

                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-linear-to-r
                  from-cyan-400
                  to-violet-500
                  group-hover:w-full
                  transition-all
                  duration-500
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
