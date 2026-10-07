import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-[#1A1A1A] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
          Get In Touch
        </span>
        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mt-3 mb-6">
          Let's build something amazing together.
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-base leading-relaxed">
          Whether you have a project in mind, a full-stack opportunity, or just want to connect—my inbox is always open.
        </p>
        <a
          href="mailto:surisetticharan36@gmail.com"
          className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all shadow-lg"
        >
          Say Hello ↗
        </a>

        <div className="mt-20 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p>© 2026 Surisetti Charan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/surisetticharan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/charan-surisetti-691877359?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/scharanyesh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}