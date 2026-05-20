const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-14">
      <p className="gradient-text font-medium mb-3">{subtitle}</p>

      <h2
        className="
        heading-primary
        text-4xl
        md:text-5xl
        "
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
