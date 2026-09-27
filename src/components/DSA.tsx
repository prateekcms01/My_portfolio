import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { dsa } from "../data/resume";
import { Code, Award, CheckCircle } from "lucide-react";

const platformColors: Record<string, string> = {
  LeetCode: "text-orange-400 border-orange-500/30 bg-orange-500/10",
  HackerRank: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  GeeksforGeeks: "text-green-400 border-green-500/30 bg-green-500/10",
};

export default function DSA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-violet-400 font-mono text-sm">06. problem solving</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Problem Solving
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Big number + platforms */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 to-transparent"
          >
            <div className="flex items-center gap-3 mb-2">
              <Code size={20} className="text-violet-400" />
              <span className="text-zinc-400 text-sm">Total Problems</span>
            </div>
            <div className="text-7xl font-black font-mono text-white mt-2">
              {dsa.count}
            </div>
            <div className="text-zinc-400 text-sm mt-1">DSA Problems Solved</div>

            <div className="flex flex-wrap gap-2 mt-6">
              {dsa.platforms.map((platform) => (
                <span
                  key={platform}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${
                    platformColors[platform] ?? "text-zinc-300 border-white/10 bg-white/5"
                  }`}
                >
                  {platform}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} className="text-zinc-400" />
              <span className="text-zinc-400 text-sm font-medium">
                Certifications & Achievements
              </span>
            </div>
            {dsa.certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <CheckCircle
                  size={14}
                  className="text-violet-400 flex-shrink-0 mt-0.5"
                />
                <span className="text-zinc-300 text-sm">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
