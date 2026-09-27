import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/resume";

const categoryColors: Record<string, string> = {
  Languages: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  Backend: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  Databases: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "Generative AI": "text-violet-400 border-violet-500/30 bg-violet-500/10",
  Tools: "text-orange-400 border-orange-500/30 bg-orange-500/10",
  Cloud: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  "AI Tools": "text-pink-400 border-pink-500/30 bg-pink-500/10",
  "CS Fundamentals": "text-rose-400 border-rose-500/30 bg-rose-500/10",
};

const categoryDotColors: Record<string, string> = {
  Languages: "bg-yellow-400",
  Backend: "bg-blue-400",
  Databases: "bg-emerald-400",
  "Generative AI": "bg-violet-400",
  Tools: "bg-orange-400",
  Cloud: "bg-sky-400",
  "AI Tools": "bg-pink-400",
  "CS Fundamentals": "bg-rose-400",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);

  return (
    <section id="skills" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">04. skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Technical Skills
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Click a category to highlight it.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              activeCategory === null
                ? "bg-violet-600 border-violet-500 text-white"
                : "border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeCategory === cat
                  ? `${categoryColors[cat]} border-opacity-60`
                  : "border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="space-y-6">
          {categories.map((category, catIdx) => {
            const isFiltered =
              activeCategory !== null && activeCategory !== category;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: isFiltered ? 0.25 : 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="transition-opacity duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      categoryDotColors[category] ?? "bg-zinc-500"
                    }`}
                  />
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    {category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(skills as Record<string, string[]>)[category].map(
                    (skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: catIdx * 0.05 + skillIdx * 0.03,
                        }}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 hover:scale-105 cursor-default ${
                          categoryColors[category] ?? "text-zinc-300 border-white/10 bg-white/5"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
