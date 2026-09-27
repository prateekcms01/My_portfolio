import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "../data/resume";
import { MapPin, Calendar, Zap } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">02. experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((job, jobIdx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: jobIdx * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 ${
                    job.current
                      ? "border-violet-400 bg-violet-600/30"
                      : "border-zinc-600 bg-zinc-800"
                  }`}
                >
                  {job.current && (
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-bold text-lg">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-violet-400 font-semibold text-sm mt-0.5">
                        {job.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={11} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            h.impact ? "bg-violet-400" : "bg-zinc-600"
                          }`}
                        />
                        <div className="flex-1">
                          <p
                            className={`text-sm leading-relaxed ${
                              h.impact ? "text-zinc-300" : "text-zinc-400"
                            }`}
                          >
                            {h.text}
                          </p>

                          {/* Impact badge */}
                          {h.impact && (
                            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-mono font-semibold">
                              <Zap size={10} className="text-violet-400" />
                              {h.impactLabel} processing time
                            </div>
                          )}

                          {/* Tags */}
                          {h.tags && h.tags.length > 0 && !h.impact && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {h.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 border border-white/8 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
