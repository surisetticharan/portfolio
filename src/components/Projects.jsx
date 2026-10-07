import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectsData = [
  {
    id: '01',
    title: 'AI-Powered Brain Tumor Detection & Analytics Platform',
    kicker: 'Deep Learning & AI',
    description: 'Engineered a deep learning model achieving 95% accuracy across 3,000+ medical records, translating complex backend data into structured insights. Streamlined data-preprocessing pipelines, cutting execution latency by 25%.',
    features: ['95% model accuracy on 3,000+ records', 'Optimized Python data pipelines'],
    tech: ['Python', 'TensorFlow', 'Keras', 'ResNet'],
    github: 'https://github.com'
  },
  {
    id: '02',
    title: 'Advanced Drusen Segmentation for AMD Diagnostics',
    kicker: 'Research & Medical AI',
    description: 'Spearheaded a multi-phase research project as Team Lead, designing diagnostic workflows aimed at reducing manual analysis time by 50% while improving detection accuracy by 15%.',
    features: ['50% reduction in manual analysis time', '15% detection accuracy improvement'],
    tech: ['Python', 'OpenCV', 'Deep Learning', 'JavaScript'],
    github: 'https://github.com'
  },
  {
    id: '03',
    title: 'Hairsafe: Full-Stack E-Commerce Platform',
    kicker: 'Full-Stack Web App',
    description: 'Developed a Django-based full-stack platform supporting 100+ concurrent product-management workflows with responsive front-end interfaces and smart recommendation logic.',
    features: ['100+ concurrent workflows supported', 'Optimized conversion efficiency by 10%'],
    tech: ['Django', 'Python', 'HTML5', 'CSS3', 'PostgreSQL'],
    github: 'https://github.com'
  },
  {
    id: '04',
    title: 'Personal Developer Portfolio & Design System',
    kicker: 'Frontend Architecture',
    description: 'Built a high-performance, Awwwards-style personal portfolio featuring 3D physics ID cards, periodic table interactive skills grid, and continuous smooth scroll design.',
    features: ['React 19 & Next.js 15 integration', 'Custom 3D spring swinging physics'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com'
  },
  {
    id: '05',
    title: 'AI Superheated Steam Temperature Control Simulation',
    kicker: 'Systems Engineering & Control',
    description: 'Designed an intelligent simulation model for thermal power station temperature regulation using advanced Python control models and block diagrams.',
    features: ['Accurate thermal process simulation', 'Automated PID control adjustments'],
    tech: ['Python', 'Control Models', 'NumPy', 'Data Vis'],
    github: 'https://github.com'
  },
  {
    id: '06',
    title: '8K Image Upscaling Android Mobile Application',
    kicker: 'Mobile & AI Integration',
    description: 'Developed a prototype Android application for high-resolution image upscaling utilizing Retrofit networking interfaces and a robust Python processing backend.',
    features: ['RESTful API integration via Retrofit', 'High-speed image processing backend'],
    tech: ['Kotlin', 'Android Studio', 'Python', 'Retrofit'],
    github: 'https://github.com'
  },
  {
    id: '07',
    title: 'Anatomic Echo Micro-Content Social Web App',
    kicker: 'Digital Media & Frontend',
    description: 'Created branding, responsive layouts, and content delivery infrastructure for a micro-poetry and short-form digital media initiative.',
    features: ['Minimalist monochrome UI/UX', 'Optimized media asset delivery'],
    tech: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com'
  },
  {
    id: '08',
    title: 'NexusAfterworld Unreal Engine C++ Simulation',
    kicker: 'Game Logic & C++ Systems',
    description: 'Engineered custom C++ game logic and causal simulation scripts within Unreal Engine 5, resolving compilation workflows and optimizing state performance.',
    features: ['Custom C++ gameplay mechanics', 'Optimized simulation frame performance'],
    tech: ['C++', 'Unreal Engine 5', 'Visual Studio'],
    github: 'https://github.com'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Section isolation: Fades in smoothly when scrolling into view, fades out when leaving
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.1, 1, 1, 0.1]);
  const sectionScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.96, 1, 1, 0.96]);

  const [activeId, setActiveId] = useState('01');

  return (
    <motion.section 
      id="work" 
      ref={sectionRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-28 px-8 bg-[#f4f2ee] border-t border-[#e9e6e0] relative overflow-hidden transition-all duration-500"
    >
      <div className="max-w-[1320px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-[#77756f] uppercase tracking-wider mb-2">
            <span>03</span>
            <span>—</span>
            <span>Selected work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0d0d] font-sans">
            Things I've <span className="font-serif italic text-[#77756f]">built</span>.
          </h2>
          <p className="text-[#3a3a3a] mt-3 max-w-xl text-sm leading-relaxed">
            A comprehensive showcase of AI models, full-stack web applications, mobile tools, and systems engineering initiatives.
          </p>
        </div>

        {/* Expanding Accordion Gallery */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[620px]">
          {projectsData.map((project) => {
            const isOpen = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
                className={`rounded-[28px] border p-8 cursor-pointer transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isOpen 
                    ? 'lg:flex-[8] bg-[#0d0d0d] text-white border-[#0d0d0d] shadow-2xl scale-[1.01]' 
                    : 'lg:flex-[1.5] bg-white text-[#0d0d0d] border-[#0d0d0d]/10 hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Collapsed / Spine View */}
                {!isOpen && (
                  <div className="h-full flex lg:flex-col justify-between items-center lg:items-start py-4 group">
                    <span className="font-mono text-xs opacity-60">{project.id}</span>
                    <h3 className="lg:[writing-mode:vertical-lr] lg:rotate-180 font-bold text-sm tracking-wide truncate my-auto">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-current opacity-40 flex items-center justify-center text-xs font-mono">
                      +
                    </div>
                  </div>
                )}

                {/* Expanded Panel View */}
                {isOpen && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-neutral-400">{project.id} — {project.kicker}</span>
                        <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full">Featured Project</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mt-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-neutral-300 text-sm mt-4 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                        {project.features.map((feat, idx) => (
                          <div key={idx} className="bg-neutral-900/80 p-3 rounded-xl text-xs font-medium text-neutral-200 border border-neutral-800">
                            ✓ {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-mono bg-neutral-900 text-neutral-300 px-3 py-1 rounded-md border border-neutral-800">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-all shadow-sm"
                      >
                        View on GitHub ↗
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}