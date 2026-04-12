"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-[#050816]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-purple-900/10" : "py-5"}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-purple-500/60 group-hover:ring-purple-400 transition-all" style={{ boxShadow: "0 0 14px rgba(124,58,237,0.45)" }}>
            <img src="/shakibur.jpg" alt="Shakibur Rahman" className="w-full h-full object-cover object-top scale-110" />
          </div>
          <span className="font-semibold text-white/90 text-sm hidden sm:block group-hover:text-white transition-colors">
            Shakibur<span className="text-gradient"> Rahman</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a href={link.href} className={`nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active === id ? "text-white bg-white/5" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-purple-500/50 rounded-lg transition-all duration-200">GitHub</a>
          <a href={`mailto:${personalInfo.email}`} className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all duration-200 glow">Hire Me</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white/70 hover:text-white">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 mx-4 glass rounded-2xl p-4 border border-white/10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">{link.label}</a>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10 flex gap-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-sm text-center text-white/70 border border-white/10 rounded-lg">GitHub</a>
            <a href={`mailto:${personalInfo.email}`} className="flex-1 py-2 text-sm text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">Hire Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}
