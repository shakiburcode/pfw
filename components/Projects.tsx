"use client";
import { useState } from "react";
import { projects } from "../data/portfolio";

const filters = ["All", "Web Application", "Android App + Web", "Machine Learning", "Deep Learning"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => filter === "All" || p.type === filter
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.04 }} />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-pink-400 mb-3 tracking-widest uppercase">What I&apos;ve built</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
            A showcase of academic and personal projects demonstrating diverse technical skills
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                filter === f
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-900/30"
                  : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group glass border border-white/5 rounded-2xl overflow-hidden card-shine transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-1"
            >
              {/* Card header gradient */}
              <div className={`relative h-32 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 text-3xl">{project.icon}</div>
                <div className="relative">
                  <span className="text-xs font-medium text-white/70 bg-black/30 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Category */}
                <p className="text-xs text-purple-400 font-mono mb-2">{project.category}</p>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 leading-tight group-hover:text-gradient transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                {hovered === i && (
                  <ul className="mb-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/60">
                        <span className="text-purple-400 mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/5 hover:border-white/15"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shakiburcode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass border border-white/10 hover:border-purple-500/30 rounded-2xl text-white/70 hover:text-white text-sm font-medium transition-all group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
