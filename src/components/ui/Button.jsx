const Button = ({ children }) => {
  return (
    <button
      className="
      relative
      overflow-hidden
      px-8
      py-4
      rounded-full
      bg-linear-to-r
      from-cyan-400
      to-violet-500
      text-black
      font-semibold
      hover:scale-105
      hover:shadow-2xl
      hover:shadow-cyan-500/30
      transition-all
      duration-300
      "
    >
      <span className="relative z-10">{children}</span>

      <div
        className="
        absolute
        inset-0
        bg-white/20
        opacity-0
        hover:opacity-100
        transition-all
        duration-300
        "
      />
    </button>
  );
};

export default Button;
