"use client";
import { personalInfo, softSkills, languages, activities } from "../data/portfolio";

const stats = [
  { label: "Projects Built", value: "10+", icon: "🚀", color: "from-purple-600 to-blue-600" },
  { label: "Certifications", value: "6", icon: "🏆", color: "from-blue-600 to-cyan-500" },
  { label: "Technologies", value: "20+", icon: "⚡", color: "from-cyan-500 to-teal-500" },
  { label: "Years Learning", value: "5+", icon: "📚", color: "from-pink-500 to-purple-600" },
];

const highlights = [
  { icon: "🎓", title: "CS Graduate", desc: "North South University, Bangladesh" },
  { icon: "💻", title: "Full-Stack Dev", desc: "React, Next.js, Flutter, Node.js" },
  { icon: "🤖", title: "ML Researcher", desc: "Python, TensorFlow, Scikit-learn" },
  { icon: "🏅", title: "NSU ACM Member", desc: "R&D Team, IEEE Workshops" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-purple-700 top-0 right-0" style={{ opacity: 0.06 }} />
      <div className="orb w-[300px] h-[300px] bg-cyan-700 bottom-0 left-0" style={{ opacity: 0.05 }} />

      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-3 tracking-widest uppercase">Who I am</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto text-sm">
            Passionate developer, researcher, and lifelong learner from Dhaka, Bangladesh
          </p>
        </div>

        {/* TOP ROW: Photo + Bio + Stats */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">

          {/* Photo card */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <div className="relative w-full max-w-xs mx-auto">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 blur-2xl opacity-25 scale-95" />
              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/shakibur.jpg"
                  alt="Md. Shakibur Rahman"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: "scale(1.05)" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg">{personalInfo.name}</h3>
                  <p className="text-purple-400 text-sm">{personalInfo.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs">Open to Work</span>
                  </div>
                </div>
              </div>
              {/* Social row below photo */}
              <div className="flex gap-3 mt-4 justify-center">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-xs font-medium text-white/70 hover:text-white glass border border-white/10 hover:border-purple-500/40 rounded-xl text-center transition-all flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-xs font-medium text-white/70 hover:text-blue-400 glass border border-white/10 hover:border-blue-500/40 rounded-xl text-center transition-all flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bio + highlights */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-6">
            {/* Bio text */}
            <div className="glass border border-white/5 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
                <div>
                  <h3 className="text-white font-bold text-lg">Career Objective</h3>
                  <p className="text-white/40 text-xs">What drives me forward</p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed text-[0.95rem]">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-3 py-2 bg-white/4 hover:bg-purple-500/10 border border-white/8 hover:border-purple-500/30 rounded-lg text-xs text-white/60 hover:text-white transition-all">
                  ✉️ {personalInfo.email}
                </a>
                <span className="flex items-center gap-2 px-3 py-2 bg-white/4 border border-white/8 rounded-lg text-xs text-white/60">
                  📍 {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Highlight cards row */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="glass border border-white/5 rounded-xl p-4 hover:border-purple-500/25 transition-all group card-shine">
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <p className="text-white font-semibold text-sm group-hover:text-gradient transition-all">{h.title}</p>
                  <p className="text-white/40 text-xs mt-0.5">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="relative glass border border-white/5 rounded-2xl p-5 text-center overflow-hidden group hover:border-purple-500/30 transition-all card-shine">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-white/45 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: Skills + Languages + Activities + Hobbies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Soft skills */}
          <div className="glass border border-white/5 rounded-2xl p-6 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-xs">🧠</span>
              Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="px-2.5 py-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full hover:bg-purple-500/20 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Hobbies */}
          <div className="flex flex-col gap-4">
            <div className="glass border border-white/5 rounded-2xl p-5">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xs">🌐</span>
                Languages
              </h4>
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-white text-sm font-medium">{l.lang}</p>
                    <p className="text-white/35 text-[11px]">{l.detail}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 rounded-full">{l.level}</span>
                </div>
              ))}
            </div>
            <div className="glass border border-white/5 rounded-2xl p-5">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-lg bg-pink-500/20 flex items-center justify-center text-xs">🎯</span>
                Hobbies
              </h4>
              <div className="flex gap-2 flex-wrap">
                {["🌍 Traveling", "🚴 Cycling", "💻 Coding"].map((h) => (
                  <span key={h} className="px-3 py-1.5 text-xs text-white/60 bg-white/4 border border-white/8 rounded-full hover:text-white hover:border-pink-500/30 transition-all">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="glass border border-white/5 rounded-2xl p-6 lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center text-xs">🌟</span>
              Activities &amp; Volunteering
            </h4>
            <div className="space-y-3">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/20 flex items-center justify-center text-green-400 text-[10px] font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed group-hover:text-white/80 transition-colors">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
