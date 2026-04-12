import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10 overflow-hidden">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
            SR
          </div>
          <span className="text-white/50 text-sm">
            Shakibur Rahman &mdash; Portfolio {year}
          </span>
        </div>
        <p className="text-white/25 text-xs text-center">
          Built with Next.js • TypeScript • Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-xs transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-400 text-xs transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="text-white/40 hover:text-purple-400 text-xs transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
