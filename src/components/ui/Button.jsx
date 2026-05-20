const Button = ({ children }) => {
  return (
    <button
      className="
      px-6 py-3
      rounded-full
      font-medium
      bg-linear-to-r
      from-violet-600
      to-cyan-500
      hover:scale-105
      transition-all
      duration-300
      cursor-pointer
      "
    >
      {children}
    </button>
  );
};

export default Button;
