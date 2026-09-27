import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Clock, TrendingDown } from "lucide-react";

export default function EngineeringImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">05. impact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Engineering Impact
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
            I don't just write code — I measure and improve performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent p-8 sm:p-12 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Before / After visualization */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-10">
              {/* Before */}
              <div className="text-center">
                <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">
                  Before
                </div>
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-red-500/20 bg-red-500/5" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl sm:text-4xl font-bold text-red-400 font-mono">
                      90
                    </div>
                    <div className="text-xs text-red-400/70 font-mono">min</div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Clock size={16} className="text-red-400/60" />
                  </div>
                </div>
                <div className="mt-2 text-xs text-zinc-500">API Processing</div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={
                    inView
                      ? {
                          x: [0, 6, 0],
                          opacity: [0.5, 1, 0.5],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-1 text-violet-400"
                >
                  <TrendingDown size={20} />
                  <Zap size={16} />
                </motion.div>
                <div className="text-xs text-zinc-600 font-mono">BullMQ</div>
              </div>

              {/* After */}
              <div className="text-center">
                <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">
                  After
                </div>
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute inset-0 rounded-full border-4 border-emerald-500/40 bg-emerald-500/10"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl sm:text-4xl font-bold text-emerald-400 font-mono">
                      20
                    </div>
                    <div className="text-xs text-emerald-400/70 font-mono">min</div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Zap size={16} className="text-emerald-400" />
                  </div>
                </div>
                <div className="mt-2 text-xs text-zinc-500">API Processing</div>
              </div>
            </div>

            {/* Big stat */}
            <div className="text-center">
              <div className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight">
                <span className="text-red-400/60 line-through">90</span>
                <span className="text-zinc-600 mx-3">→</span>
                <span className="text-emerald-400">20</span>
                <span className="text-2xl sm:text-4xl text-zinc-400 font-light ml-1">
                  min
                </span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <TrendingDown size={14} />
                78% reduction in API processing time
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 max-w-xl mx-auto text-center">
              <p className="text-zinc-400 text-sm leading-relaxed">
                At <span className="text-white">Mahindra First Choice Wheels</span>,
                I integrated{" "}
                <span className="text-violet-400 font-mono">BullMQ</span> for
                background job and queue processing, moving expensive operations
                out of the synchronous request lifecycle — reducing API processing
                time from <span className="text-red-400 font-mono">90 minutes</span>{" "}
                to <span className="text-emerald-400 font-mono">20 minutes</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
