"use client";
import { certificates, activities } from "../data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-yellow-600 bottom-0 right-1/4" style={{ opacity: 0.05 }} />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-yellow-400 mb-3 tracking-widest uppercase">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Certificates &amp; <span className="text-gradient">Activities</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-sm">🏆</span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 glass border border-white/5 rounded-xl p-5 glass-hover card-shine"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center text-xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-white/90 font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-sm">🌟</span>
              Extra-Curricular Activities
            </h3>
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 glass border border-white/5 rounded-xl p-5 glass-hover"
                >
                  <div className="w-7 h-7 flex-shrink-0 rounded-full bg-green-500/20 border border-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>

            {/* References block */}
            <div className="mt-8 glass border border-purple-500/15 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                Academic References
              </h4>
              <div className="space-y-4">
                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                  <p className="text-white/80 font-medium text-sm">Professor Shazzad Hosain</p>
                  <p className="text-purple-400 text-xs mt-0.5">Professor & Dean, ECE Dept — North South University</p>
                  <p className="text-white/30 text-xs mt-1">Former Director, NSU Startups Next</p>
                  <a href="mailto:shazzad.hosain@northsouth.edu" className="text-blue-400 text-xs hover:underline mt-1 block">
                    shazzad.hosain@northsouth.edu
                  </a>
                </div>
                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                  <p className="text-white/80 font-medium text-sm">Dr. MD Musfique Anwar</p>
                  <p className="text-purple-400 text-xs mt-0.5">Professor (Adjunct), ECE Dept — North South University</p>
                  <a href="mailto:musfique.anwar@northsouth.edu" className="text-blue-400 text-xs hover:underline mt-1 block">
                    musfique.anwar@northsouth.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
