import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "../data/resume";
import { Mail, Phone, Download, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "text-violet-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    color: "text-emerald-400",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Prateek Kumar Nigam",
    href: personal.linkedin,
    color: "text-blue-400",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "prateek-nigam",
    href: personal.github,
    color: "text-zinc-300",
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validateForm(data: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Frontend only — to connect an email service later
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 bg-white/[0.04] border transition-all duration-200 focus:outline-none focus:ring-2 ${errors[field]
      ? "border-red-500/50 focus:ring-red-500/30"
      : "border-white/10 focus:ring-violet-500/30 focus:border-violet-500/40"
    }`;

  return (
    <section id="contact" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">08. contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Let's Build Something Impactful.
          </h2>
          <p className="text-zinc-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            I'm open to Software Developer, Backend Developer, and engineering
            opportunities where I can work on scalable backend systems, APIs,
            databases, and AI-powered applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info + download */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-0.5">{label}</div>
                  <div className="text-white text-sm font-medium">{value}</div>
                </div>
              </a>
            ))}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
              >
                <Mail size={15} />
                Email Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/5 transition-all hover:-translate-y-0.5"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>

          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl border border-white/8 bg-white/[0.03]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-60 gap-4 text-center">
                <CheckCircle size={40} className="text-emerald-400" />
                <div>
                  <div className="text-white font-semibold text-lg">
                    Message received!
                  </div>
                  <div className="text-zinc-400 text-sm mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </div>

                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
                        <AlertCircle size={10} />
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
                        <AlertCircle size={10} />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                    Company{" "}
                    <span className="text-zinc-600">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className={inputClass("company")}
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1.5 font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
                      <AlertCircle size={10} />
                      {errors.message}
                    </div>
                  )}
                </div>



                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
