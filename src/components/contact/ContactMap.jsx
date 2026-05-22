import { motion } from "framer-motion";

import { fadeUp } from "../../animations/motion";

const ContactMap = () => {
  return (
    <section className="relative pb-32">
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
  );
};

export default ContactMap;
