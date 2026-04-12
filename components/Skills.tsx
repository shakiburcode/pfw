"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/75 font-medium">{name}</span>
        <span className="text-xs text-white/40 font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${
              color.includes("purple") ? "#7c3aed, #2563eb" :
              color.includes("blue") ? "#2563eb, #06b6d4" :
              color.includes("green") ? "#10b981, #06b6d4" :
              color.includes("orange") ? "#f97316, #ef4444" :
              color.includes("pink") ? "#ec4899, #7c3aed" :
              "#f59e0b, #f97316"
            })`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700 bottom-0 left-0" style={{ opacity: 0.06 }} />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-cyan-400 mb-3 tracking-widest uppercase">What I know</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
            A comprehensive toolkit built through coursework, projects, and self-learning
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              activeCategory === null
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "glass border border-white/10 text-white/60 hover:text-white"
            }`}
          >
            All
          </button>
          {categories.map(([cat]) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "glass border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {(skills as Record<string, { icon: string }>)[cat].icon} {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter(([cat]) => activeCategory === null || cat === activeCategory)
            .map(([category, data]) => {
              const catData = data as { icon: string; color: string; items: { name: string; level: number }[] };
              return (
                <div
                  key={category}
                  className="glass border border-white/5 rounded-2xl p-6 card-shine glass-hover"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${catData.color} flex items-center justify-center text-xl`}
                    >
                      {catData.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">{category}</h3>
                      <p className="text-white/30 text-xs">{catData.items.length} skills</p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  {catData.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color={catData.color} />
                  ))}
                </div>
              );
            })}
        </div>

        {/* Tech badge cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-white/60 text-sm mb-6 uppercase tracking-widest font-mono">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["AutoCAD", "Power BI", "Figma", "Jira", "Trello", "Jupyter Notebook", "Adobe Photoshop",
              "Adobe Premiere Pro", "Logisim", "NI Multisim", "Cisco Packet Tracer", "Bootstrap", "Django"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-xs font-medium text-white/50 glass border border-white/5 rounded-full hover:text-white hover:border-white/20 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
