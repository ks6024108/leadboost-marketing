import { motion } from "framer-motion";

import { Star } from "lucide-react";

import { testimonials, trustedCompanies } from "../data/testimonials";

import { fadeUp, staggerContainer } from "../animations/motion";

const Testimonials = () => {
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
            Client Testimonials
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            mb-6
            "
          >
            Businesses Trust
            <span className="gradient-text"> LeadBoost Marketing</span>
          </h2>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            Helping startups, local businesses, ecommerce brands, and service
            providers grow faster with strategic digital solutions.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}

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
          {testimonials.map((item, index) => (
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

              {/* STARS */}

              <div
                className="
                flex
                items-center
                gap-1
                mb-6
                relative
                z-10
                "
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="
                    w-5
                    h-5
                    fill-cyan-400
                    text-cyan-400
                    "
                  />
                ))}
              </div>

              {/* REVIEW */}

              <p
                className="
                text-gray-300
                leading-relaxed
                text-lg
                mb-8
                relative
                z-10
                "
              >
                "{item.review}"
              </p>

              {/* CLIENT */}

              <div className="relative z-10">
                <h3
                  className="
                  text-xl
                  font-semibold
                  mb-1
                  "
                >
                  {item.name}
                </h3>

                <p className="text-cyan-400 text-sm">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* TRUSTED PLATFORMS */}

        <div
          className="
          relative
          overflow-hidden
          "
        >
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
