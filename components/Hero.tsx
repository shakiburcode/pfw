"use client";
import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "ML Enthusiast",
  "Problem Solver",
  "CS Graduate",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] bg-purple-700 top-[-100px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-blue-700 bottom-[-100px] right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-cyan-600 top-[40%] right-[20%]" style={{ opacity: 0.07 }} />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse-slow"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 4}s`, opacity: Math.random() * 0.6 + 0.1 }} />
        ))}
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* LEFT: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="text-gradient">Shakibur</span>
              <br />
              <span className="text-white">Rahman</span>
            </h1>

            {/* Animated role */}
            <div className="h-12 flex items-center lg:justify-start justify-center mb-6">
              <span className="text-xl sm:text-2xl font-mono text-cyan-400">
                &lt; {displayed}<span className="animate-pulse">|</span> /&gt;
              </span>
            </div>

            {/* Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-white/50 leading-relaxed mb-10 mx-auto lg:mx-0">
              {personalInfo.subtitle}. Passionate about building scalable web &amp; mobile applications that make a real difference.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 glow">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" className="px-7 py-3.5 text-white/80 font-semibold rounded-xl border border-white/15 hover:border-purple-500/50 hover:text-white hover:bg-white/5 transition-all duration-200">
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <div className="w-px h-4 bg-white/20" />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-blue-400 text-sm transition-colors group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <div className="w-px h-4 bg-white/20" />
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-white/50 hover:text-cyan-400 text-sm transition-colors group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 blur-2xl opacity-40 scale-110" />
              {/* Spinning border */}
              <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-[-5px] rounded-full bg-[#050816]" />
              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 ring-white/10">
                <img
                  src="/shakibur.jpg"
                  alt="Md. Shakibur Rahman"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: "scale(1.08)" }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent" />
              </div>
              {/* Floating badge: Experience */}
              <div className="absolute -bottom-3 -right-3 glass border border-purple-500/30 rounded-2xl px-4 py-2 text-center shadow-xl">
                <p className="text-xl font-black text-gradient">5+</p>
                <p className="text-white/50 text-[10px] leading-tight">Years<br/>Learning</p>
              </div>
              {/* Floating badge: Projects */}
              <div className="absolute -top-3 -left-3 glass border border-cyan-500/30 rounded-2xl px-4 py-2 text-center shadow-xl">
                <p className="text-xl font-black text-cyan-400">10+</p>
                <p className="text-white/50 text-[10px] leading-tight">Projects<br/>Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll down</span>
          <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
