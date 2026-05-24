import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    setSuccessMessage("");

    try {
      await emailjs.sendForm(
        "service_dfvp3uh",
        "template_gwmdt69",
        formRef.current,
        "XtM4kjqmMzp180c6W"
      );

      setSuccessMessage("Message sent successfully 🚀");

      formRef.current.reset();
    } catch (error) {
      console.log(error);

      setSuccessMessage("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-cyan-500/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        bg-violet-500/10
        blur-3xl
        rounded-full
        "
      />

      <div className="container-custom relative z-10">
        <div
          className="
          max-w-4xl
          mx-auto
          glass-effect
          border
          border-white/10
          rounded-[36px]
          p-8
          md:p-14
          relative
          overflow-hidden
          "
        >
          {/* TOP LIGHT */}

          <div
            className="
            absolute
            top-0
            inset-x-0
            h-40
            bg-linear-to-b
            from-cyan-400/10
            to-transparent
            "
          />

          {/* HEADING */}

          <div className="relative z-10 text-center mb-12">
            <div
              className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              mb-6
              "
            >
              <p className="text-sm text-cyan-300 tracking-widest uppercase">
                Contact Us
              </p>
            </div>

            <h2
              className="
              text-4xl
              sm:text-5xl
              font-bold
              mb-5
              "
            >
              Let’s Discuss Your
              <span className="gradient-text"> Next Project</span>
            </h2>

            <p
              className="
              text-gray-400
              max-w-2xl
              mx-auto
              leading-relaxed
              "
            >
              Tell us about your business and ideas — we’ll help you build a
              strong digital presence.
            </p>
          </div>

          {/* FORM */}

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 relative z-10"
          >
            {/* ROW 1 */}

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                outline-none
                text-white
                placeholder:text-gray-500
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                outline-none
                text-white
                placeholder:text-gray-500
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />
            </div>

            {/* ROW 2 */}

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                outline-none
                text-white
                placeholder:text-gray-500
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Brand Name"
                className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                outline-none
                text-white
                placeholder:text-gray-500
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />
            </div>

            {/* MESSAGE */}

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project..."
              required
              className="
              w-full
              p-4
              rounded-2xl
              bg-white/5
              border
              border-white/10
              outline-none
              text-white
              placeholder:text-gray-500
              focus:border-cyan-400
              transition-all
              duration-300
              resize-none
              "
            />

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              py-5
              rounded-2xl
              bg-linear-to-r
              from-cyan-400
              to-violet-500
              text-white
              font-semibold
              text-lg
              hover:scale-[1.02]
              transition-all
              duration-300
              shadow-[0_0_35px_rgba(34,211,238,0.25)]
              "
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}

            {successMessage && (
              <p className="text-center text-cyan-300 text-sm mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
