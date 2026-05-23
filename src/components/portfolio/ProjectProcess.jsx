import { motion } from "framer-motion";

import { Search, PenTool, Code2, Rocket } from "lucide-react";

import { fadeUp, staggerContainer } from "../../animations/motion";

const process = [
  {
    title: "Research & Strategy",
    description:
      "We deeply understand your business, audience, competitors, and goals before planning the perfect digital strategy.",
    icon: Search,
  },

  {
    title: "UI/UX & Branding",
    description:
      "Premium modern interfaces designed for trust, engagement, user experience, and conversion-focused branding.",
    icon: PenTool,
  },

  {
    title: "Development & Optimization",
    description:
      "Fast, scalable, SEO-friendly websites and ecommerce systems optimized for performance and growth.",
    icon: Code2,
  },

  {
    title: "Launch & Scale",
    description:
      "After launch, we focus on growth systems, analytics, marketing, and continuous optimization for better results.",
    icon: Rocket,
  },
];

const ProjectProcess = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-120
        h-120
        bg-cyan-500/10
        blur-3xl
        rounded-full
        "
      />

      <div className="container-custom relative z-10">
        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          text-center
          max-w-3xl
          mx-auto
          mb-16
          "
        >
          <div
            className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            glass-effect
            mb-6
            "
          >
            <p className="text-sm text-cyan-400">Our Creative Process</p>
          </div>

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-6
            "
          >
            How We Build
            <span className="gradient-text"> High Performing Projects</span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            Every project is crafted with strategy, branding, performance, and
            growth in mind — not just visuals.
          </p>
        </motion.div>

        {/* PROCESS GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          "
        >
          {process.map((item, index) => {
            const Icon = item.icon;

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
                hover:border-cyan-400/30
                overflow-hidden
                transition-all
                duration-500
                "
              >
                {/* GLOW */}

                <div
                  className="
                  absolute
                  top-0
                  right-0
                  w-32
                  h-32
                  bg-cyan-400/10
                  blur-3xl
                  rounded-full
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
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  mb-6
                  "
                >
                  <Icon className="w-8 h-8 text-cyan-300" />
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
                  {item.title}
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
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectProcess;
