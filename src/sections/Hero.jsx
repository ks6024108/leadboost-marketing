import { motion } from "framer-motion";

import Button from "../components/ui/Button";

import { fadeUp, staggerContainer } from "../animations/motion";
import mainImage from "../assets/images/MainImage.png";
import Floating1 from "../assets/images/Floating1.png";
import Floating2 from "../assets/images/Floating2.png";

const floatingBubbles = [
  {
    size: "w-36 h-36",
    position: "top-[8%] left-[5%]",
    color: "bg-violet-500/40",
    duration: 8,
  },

  {
    size: "w-52 h-52",
    position: "bottom-[10%] left-[10%]",
    color: "bg-cyan-500/40",
    duration: 12,
  },

  {
    size: "w-32 h-32",
    position: "top-[18%] right-[10%]",
    color: "bg-fuchsia-500/40",
    duration: 10,
  },

  {
    size: "w-44 h-44",
    position: "bottom-[5%] right-[5%]",
    color: "bg-sky-500/40",
    duration: 14,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      pt-28
      "
    >
      {/* FLOATING BUBBLES */}

      {floatingBubbles.map((bubble, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            ${bubble.size}
            ${bubble.position}
            ${bubble.color}
            blur-2xl
            rounded-full
            opacity-80
          `}
        />
      ))}

      {/* GRID EFFECT */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* MAIN CONTENT */}

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* LEFT SIDE */}

          <motion.div variants={fadeUp}>
            {/* SMALL TAG */}

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
              <span
                className="
                w-2
                h-2
                rounded-full
                bg-cyan-400
                animate-pulse
                "
              />

              <p className="text-sm text-gray-300">LeadBoost Marketing</p>
            </div>

            {/* HEADING */}

            <h1
              className="
              heading-primary
              text-5xl
              sm:text-6xl
              lg:text-7xl
              leading-tight
              mb-6
              "
            >
              Grow Your
              <span className="gradient-text"> Business Online</span>
              <br />
              With Smart Marketing
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
              text-gray-400
              text-lg
              leading-relaxed
              max-w-xl
              mb-8
              "
            >
              We help businesses scale through high-converting ads, premium
              websites, SEO, branding, and e-commerce growth strategies.
            </p>

            {/* BUTTONS */}

            <div
              className="
              flex
              flex-wrap
              gap-4
              "
            >
              <Button>Get Free Consultation</Button>

              <button
                className="
                px-6
                py-3
                rounded-full
                border
                border-white/10
                glass-effect
                hover:border-cyan-400/30
                transition-all
                duration-300
                "
              >
                View Services
              </button>
            </div>

            {/* STATS */}

            <div
              className="
              grid
              grid-cols-3
              gap-8
              mt-14
              "
            >
              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-2
                  "
                >
                  150+
                </h3>

                <p className="text-gray-400 text-sm">Campaigns Managed</p>
              </div>

              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-2
                  "
                >
                  50+
                </h3>

                <p className="text-gray-400 text-sm">Brands Scaled</p>
              </div>

              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-2
                  "
                >
                  300%
                </h3>

                <p className="text-gray-400 text-sm">Average Growth</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            variants={fadeUp}
            className="
            relative
            flex
            justify-center
            "
          >
            {/* BACK GLOW */}

            <div
              className="
              absolute
              w-105
              h-105
              bg-linear-to-r
              from-violet-600/30
              to-cyan-500/30
              blur-3xl
              rounded-full
              "
            />

            {/* MAIN CARD */}

            <div
              className="
              relative
              w-full
              max-w-135
              glass-effect
              rounded-4xl
              p-5
              overflow-hidden
              border
              border-white/10
              "
            >
              {/* TOP BAR */}

              <div
                className="
                flex
                items-center
                gap-2
                mb-5
                "
              >
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* MAIN IMAGE */}

              <div
                className="
                relative
                rounded-3xl
                overflow-hidden
                "
              >
                <img
                  src={mainImage}
                  alt="Marketing Dashboard"
                  className="
                  w-full
                  h-105
                  object-cover
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#0B0F19]/70
                  via-transparent
                  to-transparent
                  "
                />
              </div>

              {/* FLOATING ROI CARD */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-8
                -right-10
                glass-effect
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                shadow-2xl
                w-44
                "
              >
                <img
                  src={Floating1}
                  alt="Analytics"
                  className="
                  w-full
                  h-28
                  object-cover
                  "
                />

                <div className="p-4">
                  <p className="text-xs text-gray-300 mb-1">ROI Growth</p>

                  <h4 className="text-2xl font-bold">+240%</h4>
                </div>
              </motion.div>

              {/* FLOATING ADS CARD */}

              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-10
                -left-10
                w-52
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                shadow-2xl
                glass-effect
                "
              >
                {/* IMAGE */}

                <div className="relative">
                  <img
                    src={Floating2}
                    alt="Ads Performance"
                    className="
                    w-full
                    h-32
                    object-cover
                    "
                  />

                  {/* DARK OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-black/40
                    "
                  />

                  {/* TEXT */}

                  <div
                    className="
                    absolute
                    bottom-3
                    left-3
                    "
                  >
                    <p className="text-sm text-white font-medium">
                      Ads Performance
                    </p>

                    <h4 className="text-xl font-bold text-white">
                      +180% Reach
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
