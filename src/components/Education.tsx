import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "../data/resume";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-violet-400 font-mono text-sm">07. education</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.05] transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={22} className="text-violet-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">
              {education.institution}
            </h3>
            <div className="text-violet-400 text-sm font-medium mt-0.5">
              {education.degree}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-zinc-500">
              <div className="flex items-center gap-1">
                <Calendar size={11} />
                <span>Graduated {education.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={11} />
                <span>{education.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
