import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { stats } from "../data/resume";
import { useEffect } from "react";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  // Parse the number: "500+" → 500, "90→20" → keep as is, "2+" → 2, "3" → 3
  const isSpecial = value.includes("→");
  const numericStr = value.replace("+", "").replace("→", "");
  const numeric = parseInt(numericStr, 10);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const displayValue = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    if (inView && !isSpecial) {
      motionValue.set(numeric);
    }
  }, [inView, isSpecial, numeric, motionValue]);

  if (isSpecial) {
    return (
      <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white font-mono">
        {inView ? value : value}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white font-mono">
      <motion.span>{displayValue}</motion.span>
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-center overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-2">
                <AnimatedNumber value={stat.value} />
                {stat.suffix && (
                  <span className="text-lg font-mono text-violet-400 ml-1">
                    {stat.suffix}
                  </span>
                )}
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
