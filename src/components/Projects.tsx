import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/resume";
import { ExternalLink, ChevronDown, ArrowRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const colorMap: Record<string, string> = {
  violet: "from-violet-600/20 to-violet-600/5 border-violet-500/30 text-violet-400",
  cyan: "from-cyan-600/20 to-cyan-600/5 border-cyan-500/30 text-cyan-400",
  emerald: "from-emerald-600/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400",
};

const badgeColorMap: Record<string, string> = {
  violet: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

function RagPipeline({ pipeline }: { pipeline: string[] }) {
  return (
    <div className="mt-5 p-4 rounded-xl bg-black/30 border border-white/5">
      <div className="text-xs text-zinc-500 font-mono mb-3">RAG Architecture</div>
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-1">
        {pipeline.map((step, i) => (
          <div key={step} className="flex items-center gap-1">
            <div className="px-2 py-1 rounded-md bg-violet-900/40 border border-violet-500/20 text-violet-300 text-xs font-mono whitespace-nowrap">
              {step}
            </div>
            {i < pipeline.length - 1 && (
              <ArrowRight size={10} className="text-zinc-600 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowViz({ workflow, color }: { workflow: string[]; color: string }) {
  const dotColor =
    color === "cyan"
      ? "bg-cyan-500"
      : color === "emerald"
      ? "bg-emerald-500"
      : "bg-violet-500";
  const arrowColor =
    color === "cyan"
      ? "text-cyan-600"
      : color === "emerald"
      ? "text-emerald-600"
      : "text-violet-600";

  return (
    <div className="mt-5 p-4 rounded-xl bg-black/30 border border-white/5">
      <div className="text-xs text-zinc-500 font-mono mb-3">Workflow</div>
      <div className="flex flex-wrap items-center gap-1">
        {workflow.map((step, i) => (
          <div key={step} className="flex items-center gap-1">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/8 text-zinc-300 text-xs">
              <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
              {step}
            </div>
            {i < workflow.length - 1 && (
              <ArrowRight size={10} className={`flex-shrink-0 ${arrowColor}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);
  const colors = colorMap[project.color] ?? colorMap.violet;
  const badgeColors = badgeColorMap[project.color] ?? badgeColorMap.violet;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl border bg-gradient-to-br p-6 hover:shadow-2xl transition-all duration-300 ${colors}`}
    >
      {/* Badge */}
      <div className="flex items-start justify-between mb-4 gap-3">
        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColors}`}>
          {project.badge}
        </span>
        <div className="flex items-center gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
          ) : (
            <span className="px-2 py-1 text-[10px] font-mono text-zinc-600 border border-white/5 rounded">
              TODO: GitHub URL
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs font-mono text-zinc-300 border border-white/10 rounded-md bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Architecture / workflow viz */}
      {"pipeline" in project && project.pipeline && (
        <RagPipeline pipeline={project.pipeline} />
      )}
      {"workflow" in project && project.workflow && (
        <WorkflowViz workflow={project.workflow} color={project.color} />
      )}

      {/* Expand features */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 mt-4 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span>{expanded ? "Hide" : "View"} Features</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 space-y-1.5 overflow-hidden"
          >
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-zinc-400">
                <div className="w-1 h-1 rounded-full bg-zinc-500 mt-1.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">03. projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl">
            Real applications built with production-quality code — backend APIs, enterprise systems, and AI-powered tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
