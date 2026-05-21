import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Button from "../ui/Button";

import logo from "../../assets/images/logo.png";

// const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

const navLinks = [
  {
    name: "Home",
    path: "#home",
  },

  {
    name: "Services",
    path: "#services",
  },

  {
    name: "About",
    path: "#about",
  },

  {
    name: "Portfolio",
    path: "#portfolio",
  },

  {
    name: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300

      ${
        scrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }
      `}
    >
      <div className="container-custom">
        <div
          className="
          flex
          items-center
          justify-between
          h-20
          "
        >
          {/* LOGO */}

          <div className="flex items-center ">
            <img
              src={logo}
              alt="LeadBoost Marketing"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* DESKTOP MENU */}

          <nav
            className="
            hidden
            lg:flex
            items-center
            gap-8
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="
                text-sm
                text-gray-300
                hover:text-white
                transition-all
                duration-300
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="hidden lg:block">
            <Button>Free Consultation</Button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            lg:hidden
            text-3xl
            text-white
            "
          >
            {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            lg:hidden
            bg-[#0b0f19]
            border-t
            border-white/10
            "
          >
            <div
              className="
              container-custom
              py-8
              flex
              flex-col
              gap-6
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

              <Button>Free Consultation</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
