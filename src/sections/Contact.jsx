// import React from "react";

import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  // MapPin,
  // Instagram,
  // FacebookIcon,
  // ArrowUpRight,
} from "lucide-react";
// import { FaInstagram } from "react-icons/fa";

import { fadeUp, staggerContainer } from "../animations/motion";

const Contact = () => {
  return (
    <>
      {/* CTA SECTION */}

      <section
        id="contact"
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
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-150
          h-150
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
            relative
            overflow-hidden
            glass-effect
            rounded-[40px]
            p-10
            md:p-16
            border
            border-white/10
            "
          >
            {/* TOP GLOW */}

            <div
              className="
              absolute
              -top-20
              right-0
              w-72
              h-72
              bg-violet-500/10
              blur-3xl
              rounded-full
              "
            />

            <motion.div
              variants={fadeUp}
              className="
              relative
              z-10
              text-center
              max-w-4xl
              mx-auto
              "
            >
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
                <p className="text-sm text-cyan-400">
                  Let’s Grow Your Business
                </p>
              </div>

              {/* HEADING */}

              <h2
                className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                mb-6
                "
              >
                Ready To Scale
                <span className="gradient-text"> Your Brand Online?</span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                text-gray-400
                text-lg
                leading-relaxed
                max-w-3xl
                mx-auto
                mb-10
                "
              >
                From paid ads and SEO to ecommerce growth and premium branding —
                LeadBoost Marketing helps businesses generate more leads, sales,
                and visibility.
              </p>

              {/* BUTTONS */}

              <div
                className="
                flex
                flex-wrap
                justify-center
                gap-5
                "
              >
                {/* WHATSAPP */}

                <a
                  href="https://wa.me/917597815531?text=Hi%20LeadBoost%20Marketing,%20I%20want%20to%20grow%20my%20business%20online."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  bg-cyan-400
                  text-black
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-cyan-500/20
                  "
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </a>

                {/* EMAIL */}

                <a
                  // href="mailto:leadboostmarketing.com@gmail.com?subject=Business%20Growth%20Inquiry&body=Hi%20LeadBoost%20Marketing,%20I%20want%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=leadboostmarketing.com@gmail.com&su=Business%20Growth%20Inquiry&body=Hi%20LeadBoost%20Marketing,%20I%20want%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  glass-effect
                  border
                  border-white/10
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  "
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}

      <section
        className="
        relative
        pb-32
        "
      >
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
            overflow-hidden
            rounded-4xl
            border
            border-white/10
            glass-effect
            "
          >
            <iframe
              src="https://www.google.com/maps?q=Hawa+Sadak+Civil+Lines+Jaipur&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
