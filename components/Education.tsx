"use client";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-cyan-600 top-1/4 right-0" style={{ opacity: 0.06 }} />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-green-400 mb-3 tracking-widest uppercase">Academic background</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="timeline-line rounded-full" />

            {education.map((edu, index) => (
              <div key={index} className="relative mb-10 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-6 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-[#050816] glow" />
                </div>

                <div className="glass border border-white/5 rounded-2xl p-7 card-shine glass-hover">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {edu.institution}
                      </h3>
                      <p className="text-purple-400 text-sm mt-1">{edu.degree}</p>
                      <p className="text-white/40 text-xs mt-1">📍 {edu.location}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 text-white/60 rounded-full">
                        {edu.period}
                      </span>
                      <div className="mt-2">
                        <span className="text-sm font-bold text-gradient">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  {edu.highlights.length > 0 && (
                    <ul className="mt-4 pt-4 border-t border-white/5 space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/55">
                          <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-[10px]">★</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
