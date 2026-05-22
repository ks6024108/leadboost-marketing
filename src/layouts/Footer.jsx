import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer
      className="
      relative
      border-t
      border-white/10
      overflow-hidden
      "
    >
      {/* FOOTER GLOW */}

      <div
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-125
        h-75
        bg-violet-500/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        container-custom
        relative
        z-10
        py-20
        "
      >
        <div
          className="
          grid
          lg:grid-cols-4
          gap-12
          "
        >
          {/* COMPANY */}

          <div>
            <h3
              className="
              text-3xl
              font-bold
              gradient-text
              mb-5
              "
            >
              LeadBoost
            </h3>

            <p
              className="
              text-gray-400
              leading-relaxed
              mb-6
              "
            >
              Helping businesses grow online through modern marketing, SEO,
              branding, websites, and ecommerce solutions.
            </p>

            {/* SOCIAL LINKS */}

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/leadbooost_marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-12
                h-12
                rounded-full
                glass-effect
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-cyan-400/30
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h4
              className="
              text-xl
              font-semibold
              mb-6
              "
            >
              Services
            </h4>

            <div className="space-y-4">
              {[
                "Google Ads",
                "SEO Services",
                "Website Design",
                "Branding",
                "Social Media Marketing",
              ].map((item, index) => (
                <HashLink
                  smooth
                  key={index}
                  to="/services"
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  "
                >
                  <ArrowUpRight className="w-4 h-4" />

                  {item}
                </HashLink>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4
              className="
              text-xl
              font-semibold
              mb-6
              "
            >
              Quick Links
            </h4>

            <div className="space-y-4">
              {["Home", "Services", "About", "Portfolio", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Services"
                        ? "/services"
                        : item === "About"
                        ? "/#about"
                        : item === "Portfolio"
                        ? "/#portfolio"
                        : "/contact"
                    }
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    "
                  >
                    <ArrowUpRight className="w-4 h-4" />

                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* CONTACT INFO */}

          <div>
            <h4
              className="
              text-xl
              font-semibold
              mb-6
              "
            >
              Contact Info
            </h4>

            <div className="space-y-5">
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />

                <div>
                  <p className="text-gray-300">+91 7597815531</p>

                  <p className="text-gray-400">+91 7062629308</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />

                <p className="text-gray-400 break-all">
                  leadboostmarketing.com@gmail.com
                </p>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />

                <p className="text-gray-400">
                  S-7A, Hawa Sadak, Civil Lines, Jaipur, Rajasthan 302006
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div
          className="
          border-t
          border-white/10
          mt-16
          pt-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          "
        >
          <p className="text-gray-500 text-sm">
            © 2026 LeadBoost Marketing. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed By LeadBoost Marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
