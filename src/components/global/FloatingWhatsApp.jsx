import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917597815531?text=Hi%20LeadBoost%20Marketing,%20I%20want%20to%20grow%20my%20business%20online."
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-999
      w-16
      h-16
      rounded-full
      bg-green-500
      flex
      items-center
      justify-center
      shadow-2xl
      shadow-green-500/30
      hover:scale-110
      transition-all
      duration-300
      animate-bounce
      "
    >
      <FaWhatsapp className="text-3xl text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
