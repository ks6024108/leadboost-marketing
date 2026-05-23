const VisionSection = () => {
  return (
    <section className="relative">
      <div className="container-custom">
        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          glass-effect
          p-10
          md:p-16
          text-center
          "
        >
          <div
            className="
            absolute
            inset-0
            bg-linear-to-r
            from-cyan-500/10
            to-violet-500/10
            "
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              Our Vision
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Helping Businesses Build
              <span className="gradient-text"> Powerful Digital Presence</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our goal is to help brands stand out online with modern design,
              strong branding, strategic marketing, and scalable digital systems
              that create long-term business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
