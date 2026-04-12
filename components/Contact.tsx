"use client";
import { useState } from "react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    {
      icon: "✉️",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-purple-600 to-blue-600",
    },
    {
      icon: "📞",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: "📍",
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "mdshakiburrahman",
      href: personalInfo.linkedin,
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "shakiburcode",
      href: personalInfo.github,
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-purple-700 bottom-[-100px] left-[-100px]" style={{ opacity: 0.08 }} />
      <div className="orb w-[300px] h-[300px] bg-cyan-600 top-0 right-0" style={{ opacity: 0.06 }} />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-3 tracking-widest uppercase">Let&apos;s connect</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
            I&apos;m actively looking for new opportunities. Whether you have a project in mind or just
            want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass border border-white/5 rounded-xl p-4 hover:border-purple-500/30 transition-all group card-shine"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs">{item.label}</p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate max-w-[220px]">
                    {item.value}
                  </p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-purple-400 transition-colors">→</span>
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass border border-green-500/20 rounded-xl p-5 mt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Currently seeking full-time positions, internships, and freelance projects in software development.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <div className="glass border border-white/5 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/50 text-xs mb-2 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/50 text-xs mb-2 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job Opportunity / Project Collaboration"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all glow flex items-center justify-center gap-2 group"
                >
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      Send Message
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
