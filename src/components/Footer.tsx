import { personal } from "../data/resume";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", href: personal.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: personal.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="text-white font-semibold text-sm">
            {personal.name}
          </div>
          <div className="text-zinc-500 text-xs mt-0.5">
            Software Developer | Backend Developer
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-zinc-600 text-xs">
          © {year} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
