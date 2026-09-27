import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, education } from "../data/resume";
import { Code2, Database, Brain, Layers } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    label: "Backend Systems",
    desc: "REST APIs, authentication, authorization, and background processing",
  },
  {
    icon: Database,
    label: "Databases",
    desc: "PostgreSQL, MySQL, MongoDB — schema design to query optimization",
  },
  {
    icon: Brain,
    label: "Generative AI",
    desc: "RAG pipelines, vector databases, LLM integration with Gemini API",
  },
  {
    icon: Code2,
    label: "Problem Solving",
    desc: "500+ DSA problems solved across LeetCode, HackerRank, GeeksforGeeks",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">01. about</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-zinc-300 text-base leading-relaxed">
              I'm <span className="text-white font-medium">{personal.name}</span> — a{" "}
              <span className="text-violet-400 font-medium">
                Software Developer and Backend Engineer
              </span>{" "}
              with hands-on experience building production-grade backend systems,
              REST APIs, database architectures, and AI-powered applications.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              My core stack is <span className="text-white font-mono text-sm">Node.js</span> /{" "}
              <span className="text-white font-mono text-sm">Express.js</span> with{" "}
              <span className="text-white font-mono text-sm">PostgreSQL</span> and{" "}
              <span className="text-white font-mono text-sm">MySQL</span>. I've implemented
              secure JWT authentication, Role-Based Access Control, and background
              job processing with <span className="text-white font-mono text-sm">BullMQ</span>.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              Beyond traditional backend work, I've built{" "}
              <span className="text-violet-400 font-medium">
                RAG (Retrieval-Augmented Generation)
              </span>{" "}
              pipelines using vector databases (ChromaDB), embeddings, and the
              Gemini API — giving me a practical understanding of modern GenAI
              application development.
            </p>

            {/* Education */}
            <div className="pt-4 border-t border-white/8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-violet-400 text-xs">🎓</span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {education.degree}
                  </div>
                  <div className="text-zinc-400 text-xs mt-0.5">
                    {education.institution}, {education.location} · {education.year}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center mb-3 group-hover:bg-violet-600/30 transition-colors">
                    <Icon size={16} className="text-violet-400" />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {item.label}
                  </div>
                  <div className="text-zinc-500 text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
