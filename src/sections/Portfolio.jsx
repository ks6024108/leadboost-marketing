import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

import { portfolioProjects } from "../data/portfolio";

import { fadeUp, staggerContainer } from "../animations/motion";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
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

      <div
        className="
        absolute
        bottom-0
        left-0
        w-96
        h-96
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
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            glass-effect
            mb-6
            "
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />

            <p
              className="
              text-cyan-400
              text-sm
              tracking-widest
              uppercase
              "
            >
              What We Can Build
            </p>
          </div>

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-6
            "
          >
            Digital Solutions
            <span className="gradient-text"> That Drive Growth</span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            From premium websites and ecommerce stores to SEO systems and
            marketing funnels — we create scalable digital solutions designed
            for growth, conversions, and branding.
          </p>
        </motion.div>

        {/* GRID */}

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

              {/* IMAGE */}

              <div
                className="
                relative
                overflow-hidden
                p-0.5
                rounded-4xl
                bg-linear-to-br
                from-cyan-400/40
                via-violet-500/30
                to-transparent
                "
              >
                {/* INNER IMAGE CONTAINER */}

                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  bg-[#09101d]
                  border
                  border-white/10
                  shadow-[0_0_40px_rgba(34,211,238,0.08)]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-95
                    object-cover
                    transition-all
                    duration-700
                    brightness-[1.18]
                    contrast-[1.12]
                    saturate-[1.25]
                    group-hover:scale-[1.04]
                    group-hover:brightness-[1.25]
                    "
                  />

                  {/* PREMIUM DARK OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#060b16]/95
                    via-[#060b16]/20
                    to-transparent
                    "
                  />

                  {/* TOP CYAN LIGHT */}

                  <div
                    className="
                    absolute
                    top-0
                    inset-x-0
                    h-28
                    bg-linear-to-b
                    from-cyan-400/15
                    to-transparent
                    "
                  />

                  {/* SIDE GLOW */}

                  <div
                    className="
                    absolute
                    -right-10
                    top-10
                    w-32
                    h-32
                    bg-cyan-400/20
                    blur-3xl
                    rounded-full
                    "
                  />

                  {/* HOVER SHINE */}

                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-linear-to-r
                    from-transparent
                    via-white/5
                    to-transparent
                    "
                  />
                </div>
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
                  <div>
                    <h3
                      className="
                      text-2xl
                      font-semibold
                      mb-2
                      "
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-300">
                      Modern • Fast • Conversion Focused
                    </p>
                  </div>

                  {/* ICON */}
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

        {/* BOTTOM NOTE */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          text-center
          mt-16
          "
        >
          <p
            className="
            text-gray-500
            text-sm
            max-w-2xl
            mx-auto
            leading-relaxed
            "
          >
            Every business is different — these are sample concepts showing the
            kind of websites, funnels, ecommerce systems, and branding
            experiences we can create for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
