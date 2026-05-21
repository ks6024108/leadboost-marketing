import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
          fixed
          inset-0
          bg-[#0B0F19]
          z-99999
          flex
          items-center
          justify-center
          "
        >
          <div className="text-center">
            {/* LOGO */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
              text-5xl
              md:text-7xl
              font-black
              gradient-text
              mb-4
              "
            >
              LeadBoost
            </motion.h1>

            {/* LOADING BAR */}

            <div
              className="
              w-64
              h-2
              rounded-full
              bg-white/10
              overflow-hidden
              mx-auto
              "
            >
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "linear",
                }}
                className="
                w-1/2
                h-full
                bg-linear-to-r
                from-cyan-400
                to-violet-500
                "
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
