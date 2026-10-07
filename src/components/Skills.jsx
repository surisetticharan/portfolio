import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillElements = [
  { number: '01', symbol: 'Py', name: 'Python', category: 'Languages', level: 'Advanced', projects: 'Brain Tumor, Drusen AI' },
  { number: '02', symbol: 'Dj', name: 'Django', category: 'Backend', level: 'Advanced', projects: 'Hairsafe E-Commerce' },
  { number: '03', symbol: 'Js', name: 'JavaScript', category: 'Languages', level: 'Intermediate', projects: 'Portfolio, Web UI' },
  { number: '04', symbol: 'SQL', name: 'SQL', category: 'Databases', level: 'Advanced', projects: 'PostgreSQL, MySQL' },
  { number: '05', symbol: 'C', name: 'Embedded C', category: 'Core ECE', level: 'Intermediate', projects: 'Microcontrollers, IoT' },
  { number: '06', symbol: 'DE', name: 'Digital Electronics', category: 'Core ECE', level: 'Advanced', projects: 'Circuit Theory' },
  { number: '07', symbol: 'Mc', name: 'Microcontrollers', category: 'Embedded', level: 'Advanced', projects: 'Hardware-Software Int.' },
  { number: '08', symbol: 'IoT', name: 'IoT Systems', category: 'Embedded', level: 'Intermediate', projects: 'Architecture & Design' },
  { number: '09', symbol: 'Tk', name: 'Tinkercad', category: 'Tools', level: 'Advanced', projects: 'Circuit Simulation' },
  { number: '10', symbol: 'Git', name: 'Git / GitHub', category: 'Tools', level: 'Advanced', projects: 'Version Control' },
  { number: '11', symbol: 'VS', name: 'VS Code', category: 'Tools', level: 'Advanced', projects: 'Development Environment' },
  { number: '12', symbol: 'AS', name: 'Android Studio', category: 'Tools', level: 'Intermediate', projects: 'Mobile Prototyping' },
  { number: '13', symbol: 'Lx', name: 'Linux', category: 'Tools', level: 'Intermediate', projects: 'System Fundamentals' },
  { number: '14', symbol: 'An', name: 'Process Analysis', category: 'Operations', level: 'Advanced', projects: 'Root-Cause Analysis' },
];

const categories = ['All', 'Languages', 'Backend', 'Core ECE', 'Embedded', 'Databases', 'Tools', 'Operations'];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSkill, setActiveSkill] = useState(skillElements[0]);

  const filteredSkills = selectedCategory === 'All' 
    ? skillElements 
    : skillElements.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-28 px-8 bg-[#f4f2ee] border-t border-[#e9e6e0] relative">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-[#77756f] uppercase tracking-wider mb-2">
            <span>02</span>
            <span>—</span>
            <span>Technical stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0d0d] font-sans">
            The periodic table of my <span className="font-serif italic text-[#77756f]">stack</span>.
          </h2>
          <p className="text-[#3a3a3a] mt-3 max-w-xl text-sm leading-relaxed">
            Every skill from my résumé rendered as a periodic element tile with atomic numbers, symbols, and project implementations.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-[#0d0d0d] text-white shadow-sm' 
                    : 'bg-white text-[#3a3a3a] border border-[#0d0d0d]/10 hover:border-[#0d0d0d]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid & Sticky Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Periodic Table Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => {
              const row = Math.floor(index / 4);
              const col = index % 4;
              const delay = (row + col) * 0.04;
              const isHoveredOrActive = activeSkill.symbol === skill.symbol;

              return (
                <motion.div
                  key={skill.symbol}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-5 rounded-[24px] cursor-pointer transition-all duration-300 flex flex-col justify-between h-36 shadow-sm ${
                    isHoveredOrActive
                      ? 'bg-[#0d0d0d] text-white border-2 border-[#0d0d0d] scale-[1.02] shadow-xl'
                      : 'bg-white text-[#0d0d0d] border border-[#0d0d0d]/10 hover:border-[#0d0d0d]/30 hover:bg-[#0d0d0d] hover:text-white'
                  }`}
                >
                  <div className={`flex justify-between items-start font-mono text-[11px] transition-colors duration-300 ${isHoveredOrActive ? 'text-neutral-400' : 'text-[#77756f]'}`}>
                    <span>{skill.number}</span>
                    <span className={`px-2 py-0.5 rounded transition-colors duration-300 ${isHoveredOrActive ? 'bg-neutral-800 text-neutral-300' : 'bg-[#f4f2ee] text-[#3a3a3a]'}`}>
                      {skill.category}
                    </span>
                  </div>
                  <div className="text-center my-auto">
                    <h3 className={`text-3xl font-extrabold font-mono tracking-tight transition-colors duration-300 ${isHoveredOrActive ? 'text-white' : 'text-[#0d0d0d]'}`}>
                      {skill.symbol}
                    </h3>
                  </div>
                  <div className="text-center">
                    <span className={`text-xs font-bold truncate block transition-colors duration-300 ${isHoveredOrActive ? 'text-neutral-200' : 'text-[#3a3a3a]'}`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sticky Inspector Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 rounded-[28px] border border-[#0d0d0d]/10 shadow-[inset_0_1px_0_rgba(13,13,13,0.06)]"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#77756f]">Skill Inspector</span>
              
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-5xl font-extrabold font-mono text-[#0d0d0d]">{activeSkill.symbol}</span>
                <div>
                  <h3 className="text-2xl font-bold text-[#0d0d0d]">{activeSkill.name}</h3>
                  <span className="text-xs font-semibold px-3 py-0.5 bg-[#f4f2ee] text-[#3a3a3a] rounded-full inline-block mt-1">
                    {activeSkill.category}
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4 pt-6 border-t border-[#0d0d0d]/10 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#77756f]">Proficiency:</span>
                  <span className="font-semibold text-[#0d0d0d]">{activeSkill.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#77756f]">Applied in:</span>
                  <span className="font-semibold text-[#0d0d0d] text-right">{activeSkill.projects}</span>
                </div>
              </div>

              <p className="mt-8 text-xs text-[#77756f] leading-relaxed italic border-t border-[#0d0d0d]/10 pt-4">
                Hover or click any periodic tile to inspect proficiency, category, and real project implementations from your résumé.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}