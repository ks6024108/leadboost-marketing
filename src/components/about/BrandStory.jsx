import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          max-w-5xl
          mx-auto
          glass-effect
          border
          border-white/10
          rounded-[36px]
          p-8
          md:p-12
          "
        >
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-5">
            Our Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Building Brands That
            <span className="gradient-text"> Actually Grow</span>
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              LeadBoost Marketing was created with one simple mission — helping
              businesses grow online with strategies that are modern, scalable,
              and focused on real business results.
            </p>

            <p>
              We combine branding, SEO, websites, paid advertising, ecommerce,
              and conversion systems into one powerful digital ecosystem built
              for long-term growth.
            </p>

            <p>
              Instead of using generic marketing methods, we focus on creating
              custom growth systems designed around each business and its goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
