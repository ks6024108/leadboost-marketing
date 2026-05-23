# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


 <div
                className="
                relative
                overflow-hidden
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-105
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#0B0F19]
                  via-[#0B0F19]/50
                  to-transparent
                  "
                />

                {/* HOVER OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-cyan-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  "
                />
              </div>





              //ye lo about coide
              <div className="space-y-6 relative z-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 10,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                      flex
                      gap-5
                      p-5
                      rounded-3xl
                      bg-white/5
                      border
                      border-white/5
                      hover:border-cyan-400/20
                      transition-all
                      duration-300
                      "
                    >
                      {/* ICON */}

                      <div
                        className="
                        min-w-14
                        h-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        bg-cyan-500/10
                        border
                        border-cyan-400/10
                        "
                      >
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>

                      {/* TEXT */}

                      <div>
                        <h3
                          className="
                          text-xl
                          font-semibold
                          mb-2
                          "
                        >
                          {feature.title}
                        </h3>

                        <p
                          className="
                          text-gray-400
                          leading-relaxed
                          "
                        >
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>



              //only need

               <div
                className="
                relative
                overflow-hidden
                p-3
                "
              >
                {/* IMAGE CONTAINER */}

                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111827]
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-95
                    object-cover
                    transition-all
                    duration-700
                    brightness-[1.08]
                    contrast-[1.05]
                    saturate-[1.15]
                    group-hover:scale-105
                    
                    "
                  />

                  {/* PREMIUM OVERLAY */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#0B0F19]
                    via-[#0B0F19]/20
                    to-transparent
                    "
                  />

                  {/* TOP LIGHT */}

                  <div
                    className="
                    absolute
                    inset-x-0
                    top-0
                    h-32
                    bg-linear-to-b
                    from-cyan-400/10
                    to-transparent
                    "
                  />

                  {/* HOVER GLOW */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-cyan-400/5
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    "
                  />
                </div>
              </div>