import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { portfolioProjects } from "../data/portfolio";

import { fadeUp, staggerContainer } from "../animations/motion";

const Portfolio = () => {
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
        top-10
        right-10
        w-80
        h-80
        bg-violet-500/10
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
            uppercase
            tracking-widest
            mb-4
            "
          >
            Portfolio
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-6
            "
          >
            Real Projects &
            <span className="gradient-text"> Growth Stories</span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            Explore some of our marketing, branding, SEO, ecommerce, and website
            growth projects.
          </p>
        </motion.div>

        {/* PORTFOLIO GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >
          {portfolioProjects.map((project, index) => (
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
              overflow-hidden
              rounded-[30px]
              glass-effect
              border
              border-white/10
              "
            >
              {/* IMAGE */}

              <div
                className="
                relative
                overflow-hidden
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-105
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#0B0F19]
                  via-[#0B0F19]/40
                  to-transparent
                  "
                />

                {/* HOVER OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-cyan-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  "
                />
              </div>

              {/* CONTENT */}

              <div
                className="
                absolute
                bottom-0
                left-0
                w-full
                p-6
                z-10
                "
              >
                {/* CATEGORY */}

                <div
                  className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  mb-4
                  "
                >
                  <p className="text-sm text-cyan-300">{project.category}</p>
                </div>

                {/* TITLE */}

                <div
                  className="
                  flex
                  items-end
                  justify-between
                  gap-4
                  "
                >
                  <h3
                    className="
                    text-2xl
                    font-semibold
                    max-w-[80%]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* ICON */}

                  <div
                    className="
                    min-w-12
                    h-12
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-cyan-400
                    transition-all
                    duration-300
                    "
                  >
                    <ArrowUpRight
                      className="
                      w-5
                      h-5
                      group-hover:text-black
                      transition-all
                      duration-300
                      "
                    />
                  </div>
                </div>
              </div>

              {/* BORDER GLOW */}

              <div
                className="
                absolute
                inset-0
                rounded-[30px]
                border
                border-cyan-400/0
                group-hover:border-cyan-400/30
                transition-all
                duration-500
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
