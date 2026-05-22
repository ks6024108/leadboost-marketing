const faqs = [
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we help startups and local businesses build their online presence and generate leads.",
  },

  {
    question: "Do you provide website design services?",
    answer:
      "Yes, we create premium responsive websites optimized for branding and conversions.",
  },

  {
    question: "Do you manage Google and Meta ads?",
    answer:
      "Yes, we manage Google Ads, Facebook Ads, and Instagram campaigns focused on ROI.",
  },

  {
    question: "How quickly can we get started?",
    answer:
      "Usually within 24-48 hours after discussing your business requirements.",
  },
];

const FAQ = () => {
  return (
    <section className="relative pb-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-widest mb-4">FAQ</p>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="gradient-text"> Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="
                glass-effect
                border
                border-white/10
                rounded-[28px]
                p-8
                "
              >
                <h3 className="text-xl font-semibold mb-4">{item.question}</h3>

                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
