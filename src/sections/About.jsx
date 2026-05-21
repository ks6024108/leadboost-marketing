import { motion } from "framer-motion";

import { BadgeCheck, TrendingUp, ShieldCheck, Rocket } from "lucide-react";

import { fadeUp, staggerContainer } from "../animations/motion";

const features = [
  {
    title: "Results Driven Strategy",
    description:
      "Every campaign is optimized for leads, conversions, and measurable business growth.",
    icon: TrendingUp,
  },

  {
    title: "Trusted Digital Expertise",
    description:
      "Professional marketing, branding, SEO, and ecommerce solutions tailored for businesses.",
    icon: BadgeCheck,
  },

  {
    title: "Transparent Communication",
    description:
      "Clear reporting, honest strategies, and smooth collaboration throughout every project.",
    icon: ShieldCheck,
  },

  {
    title: "Fast Growth Execution",
    description:
      "Quick implementation and growth-focused systems designed to scale your business faster.",
    icon: Rocket,
  },
];

const stats = [
  {
    number: "150+",
    label: "Projects Completed",
  },

  {
    number: "50+",
    label: "Business Clients",
  },

  {
    number: "300%",
    label: "Average Growth",
  },

  {
    number: "5★",
    label: "Client Satisfaction",
  },
];

const About = () => {
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
        top-20
        left-20
        w-72
        h-72
        bg-violet-500/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-20
        w-72
        h-72
        bg-cyan-500/10
        blur-3xl
        rounded-full
        "
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >
          {/* LEFT SIDE */}

          <motion.div variants={fadeUp}>
            {/* TAG */}

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
              <p className="text-sm text-cyan-400">About LeadBoost Marketing</p>
            </div>

            {/* HEADING */}

            <h2
              className="
              text-4xl
              sm:text-5xl
              font-bold
              leading-tight
              mb-6
              "
            >
              Helping Businesses
              <span className="gradient-text"> Grow Faster</span>
              <br />
              In The Digital World
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
              text-gray-400
              text-lg
              leading-relaxed
              mb-8
              "
            >
              LeadBoost Marketing is a Jaipur-based digital marketing and
              ecommerce agency focused on helping businesses generate leads,
              increase visibility, and scale online using smart digital
              strategies.
            </p>

            <p
              className="
              text-gray-400
              leading-relaxed
              mb-10
              "
            >
              From SEO and paid advertising to branding, websites, and
              marketplace management, we create complete digital growth systems
              designed for modern businesses.
            </p>

            {/* STATS */}

            <div
              className="
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-6
              "
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                  glass-effect
                  rounded-2xl
                  p-5
                  text-center
                  border
                  border-white/10
                  "
                >
                  <h3
                    className="
                    text-3xl
                    font-bold
                    gradient-text
                    mb-2
                    "
                  >
                    {item.number}
                  </h3>

                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            variants={fadeUp}
            className="
            relative
            "
          >
            {/* MAIN CONTAINER */}

            <div
              className="
              relative
              glass-effect
              rounded-4xl
              p-8
              border
              border-white/10
              overflow-hidden
              "
            >
              {/* TOP GLOW */}

              <div
                className="
                absolute
                -top-20
                right-0
                w-52
                h-52
                bg-cyan-500/10
                blur-3xl
                rounded-full
                "
              />

              {/* FEATURES */}

              <div className="space-y-6 relative z-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 10,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                      flex
                      gap-5
                      p-5
                      rounded-3xl
                      bg-white/5
                      border
                      border-white/5
                      hover:border-cyan-400/20
                      transition-all
                      duration-300
                      "
                    >
                      {/* ICON */}

                      <div
                        className="
                        min-w-14
                        h-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        bg-cyan-500/10
                        border
                        border-cyan-400/10
                        "
                      >
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>

                      {/* TEXT */}

                      <div>
                        <h3
                          className="
                          text-xl
                          font-semibold
                          mb-2
                          "
                        >
                          {feature.title}
                        </h3>

                        <p
                          className="
                          text-gray-400
                          leading-relaxed
                          "
                        >
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
