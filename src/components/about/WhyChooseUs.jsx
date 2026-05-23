const items = [
  "Premium modern UI/UX designs",
  "Fast loading & responsive websites",
  "SEO-focused development structure",
  "Transparent communication",
  "Growth-focused marketing systems",
  "Long-term brand scalability",
];

const WhyChooseUs = () => {
  return (
    <section className="relative">
      <div className="container-custom">
        <div
          className="
          glass-effect
          border
          border-white/10
          rounded-[36px]
          p-8
          md:p-12
          "
        >
          <div className="max-w-3xl mb-12">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Why Businesses Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              More Than Just
              <span className="gradient-text"> Marketing Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-6
                py-5
                text-gray-200
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
