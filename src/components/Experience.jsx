import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experienceData = [
  {
    year: '2026',
    period: 'Aug 2022 - Apr 2026',
    title: 'B.Tech in Electronics & Communication Engineering',
    place: 'Vel Tech University, Chennai',
    category: 'EDUCATION',
    desc: 'CGPA: 8.5/10.0. Focused on core circuit theory, digital electronics, microcontrollers, embedded systems, and robust software engineering practices.'
  },
  {
    year: '2025',
    period: 'Aug 2025',
    title: 'Intelligent Embedded Systems: AI for Real-world Applications',
    place: 'Professional Certification',
    category: 'CERTIFICATION',
    desc: 'Advanced training on applying artificial intelligence models to real-world embedded hardware and IoT architecture.'
  },
  {
    year: '2025',
    period: 'Mar 2025',
    title: 'Introduction to Modern AI',
    place: 'AI Training Program',
    category: 'CERTIFICATION',
    desc: 'Foundational concepts and practical applications of modern AI frameworks and neural networks.'
  },
  {
    year: '2024',
    period: 'Oct 2024',
    title: 'CompTIA IT Fundamentals: Operating Systems Infrastructure',
    place: 'CompTIA',
    desc: 'Comprehensive understanding of operating systems infrastructure, hardware maintenance, and software troubleshooting.'
  },
  {
    year: '2022',
    period: 'Jul 2020 - Apr 2022',
    title: 'Intermediate (MPC)',
    place: 'Dr. Himasekhar Junior College, Anakapalli',
    category: 'EDUCATION',
    desc: 'Percentage: 62%. Built a strong analytical and mathematical foundation in Mathematics, Physics, and Chemistry.'
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Section isolation: Fades in when entering screen, fades out when scrolling away
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.1, 1, 1, 0.1]);
  const sectionScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.96, 1, 1, 0.96]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section 
      id="experience" 
      ref={sectionRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-32 px-6 bg-[#f4f2ee] border-t border-[#e9e6e0] relative overflow-hidden transition-all duration-500"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-xs text-[#77756f] uppercase tracking-wider mb-2">
            <span>04</span>
            <span>—</span>
            <span>Career path & learning</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0d0d] font-sans">
            Education & <span className="font-serif italic text-[#77756f]">experience</span>.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Center Vertical Spine Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#0d0d0d]/20 -translate-x-1/2 hidden lg:block"></div>

          {/* Timeline Nodes */}
          <div className="space-y-16 relative z-10">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              let cardStyle = "bg-white text-[#0d0d0d] border-[#0d0d0d]/15 shadow-sm";
              let blurStyle = "filter-none opacity-90";

              if (isAnyHovered) {
                if (isHovered) {
                  cardStyle = "bg-[#0d0d0d] text-white border-[#0d0d0d] shadow-2xl scale-[1.03]";
                  blurStyle = "blur-0 opacity-100";
                } else {
                  cardStyle = "bg-white/40 text-[#0d0d0d]/40 border-transparent shadow-none";
                  blurStyle = "blur-[6px] opacity-25 scale-[0.97]";
                }
              }

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-6 lg:gap-0 cursor-pointer transition-all duration-300 ease-out`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-[45%] p-7 rounded-[26px] border transition-all duration-300 ease-out ${cardStyle} ${blurStyle}`}>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-[11px] font-mono px-3 py-1 rounded-full ${isHovered ? 'bg-neutral-800 text-neutral-300' : 'bg-[#f4f2ee] text-[#3a3a3a]'}`}>
                        {item.period}
                      </span>
                      <span className={`text-[11px] font-mono ${isHovered ? 'text-neutral-400' : 'text-[#77756f]'}`}>
                        0{index + 1}
                      </span>
                    </div>

                    <span className={`inline-block text-[10px] font-mono uppercase tracking-widest mb-1 ${isHovered ? 'text-neutral-400' : 'text-[#77756f]'}`}>
                      {item.category}
                    </span>

                    <h3 className={`text-xl font-bold leading-snug ${isHovered ? 'text-white' : 'text-[#0d0d0d]'}`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs font-semibold mt-1 ${isHovered ? 'text-neutral-300' : 'text-[#77756f]'}`}>
                      {item.place}
                    </p>

                    <p className={`text-xs mt-3 leading-relaxed ${isHovered ? 'text-neutral-300' : 'text-[#3a3a3a]'}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Center Dot Node */}
                  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-3 border-[#0d0d0d] hidden lg:flex items-center justify-center z-20 transition-all duration-200 ${isHovered ? 'scale-125 bg-black' : 'shadow-sm'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${isHovered ? 'bg-white' : 'bg-[#0d0d0d]'}`}></div>
                  </div>

                  {/* Opposite Watermark Year */}
                  <div className={`hidden lg:flex lg:w-[45%] justify-center items-center pointer-events-none select-none transition-opacity duration-300 ${isHovered ? 'opacity-25' : 'opacity-10'}`}>
                    <span className="text-[140px] font-extrabold font-mono text-[#0d0d0d] tracking-tighter">
                      {item.year}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </motion.section>
  );
}