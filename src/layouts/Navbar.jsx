import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { HashLink } from "react-router-hash-link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Button from "../components/ui/Button";

import logo from "../assets/images/logo.png";

const navLinks = [
  {
    name: "Home",
    path: "/#home",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "About",
    path: "/#about",
  },

  {
    name: "Portfolio",
    path: "/#portfolio",
  },

  {
    name: "Contact",
    path: "/contact",
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

          {/*<HashLink smooth to="/" className="flex items-center">
            <img
              src={logo}
              alt="LeadBoost Marketing"
              className="h-14 w-auto object-contain"
            />
          </HashLink> */}

          <HashLink
            smooth
            to="/"
            className="
  relative
  flex
  items-center
  z-50
  "
          >
            {/* SUBTLE BACK GLOW */}

            <div
              className="
    absolute
    -inset-3
    bg-linear-to-r
    from-yellow-400/10
    via-orange-400/5
    to-cyan-400/10
    blur-2xl
    opacity-70
    "
            />

            {/* LOGO */}

            <img
              src={logo}
              alt="LeadBoost Marketing"
              className="
              relative
              h-14
              lg:h-16
              w-auto
              object-contain
              drop-shadow-[0_0_25px_rgba(255,180,0,0.18)]
              transition-all
              duration-500
              hover:scale-[1.03]
              "
            />
          </HashLink>

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
              <HashLink
                key={link.name}
                smooth
                to={link.path}
                className="
                text-sm
                text-gray-300
                hover:text-white
                transition-all
                duration-300
                "
              >
                {link.name}
              </HashLink>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="hidden lg:block">
            <a
              href="https://wa.me/917597815531?text=Hi%20LeadBoost%20Marketing,%20I%20want%20to%20grow%20my%20business%20online."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Free Consultation</Button>
            </a>
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
                <HashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  {link.name}
                </HashLink>
              ))}

              <a
                href="https://wa.me/917597815531?text=Hi%20LeadBoost%20Marketing,%20I%20want%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button>Free Consultation</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
