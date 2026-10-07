import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const achievementsData = [
  {
    number: '95%',
    label: 'Model Accuracy',
    title: 'Brain Tumor Detection AI',
    desc: 'Engineered a deep learning model analyzing 3,000+ medical records with high precision and robust validation.'
  },
  {
    number: '50%',
    label: 'Time Reduction',
    title: 'Drusen Segmentation Research',
    desc: 'Spearheaded diagnostic workflows targeting a 50% reduction in manual ophthalmological analysis time.'
  },
  {
    number: '100+',
    label: 'Concurrent Workflows',
    title: 'Hairsafe E-Commerce Platform',
    desc: 'Supported robust product-management workflows with highly optimized recommendation logic and scalable state.'
  },
  {
    number: '8.5',
    label: 'CGPA / 10.0',
    title: 'Vel Tech University',
    desc: 'B.Tech in Electronics & Communication Engineering (2026 Graduate) with core technical excellence.'
  },
  {
    number: '10k+',
    label: 'Data Points',
    title: 'Real-time IoT Sensor Hub',
    desc: 'Processed high-frequency telemetry data streams from embedded microcontrollers with zero latency.'
  },
  {
    number: '99.9%',
    label: 'Uptime Reliability',
    title: 'Cloud Infrastructure API',
    desc: 'Deployed fault-tolerant backend microservices ensuring uninterrupted high-availability.'
  },
  {
    number: '450+',
    label: 'Problems Solved',
    title: 'Competitive Programming',
    desc: 'Mastered data structures, algorithms, and logical problem-solving across various coding platforms.'
  },
  {
    number: 'Top 1',
    label: 'Department Rank',
    title: 'Academic Excellence',
    desc: 'Recognized for top-tier academic performance and leadership in technical symposiums.'
  }
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Section isolation: Fades in when entering screen, fades out when scrolling away
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.1, 1, 1, 0.1]);
  const sectionScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.96, 1, 1, 0.96]);

  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = mouseX / width;

    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    if (maxScroll > 0) {
      if (percentage < 0.35) {
        setScrollX(0);
      } else if (percentage > 0.65) {
        setScrollX(maxScroll);
      } else {
        setScrollX(maxScroll * ((percentage - 0.35) / 0.3));
      }
    }
  };

  return (
    <motion.section 
      id="achievements" 
      ref={sectionRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-28 bg-[#f4f2ee] border-t border-[#e9e6e0] relative overflow-hidden transition-all duration-500"
    >
      <div className="max-w-[1320px] mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-[#77756f] uppercase tracking-wider mb-2">
          <span>05</span>
          <span>—</span>
          <span>Milestones & Metrics</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0d0d] font-sans">
          Proud moments & <span className="font-serif italic text-[#77756f]">metrics</span>.
        </h2>
        <p className="text-[#3a3a3a] mt-2 text-sm max-w-xl">
          Move your cursor left or right across the section to gently glide through milestones with 3D glassmorphic cards.
        </p>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setScrollX(0)}
        className="w-full overflow-hidden py-6 px-6 cursor-ew-resize relative"
      >
        <motion.div 
          animate={{ x: -scrollX }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="flex gap-8 w-max px-6"
        >
          {achievementsData.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`w-[340px] sm:w-[380px] p-8 rounded-[32px] flex flex-col justify-between transition-all duration-300 relative ${
                  isHovered 
                    ? 'bg-white/90 text-[#0d0d0d] border border-white/80 shadow-[0_25px_50px_-12px_rgba(13,13,13,0.18)] z-30 ring-1 ring-black/5' 
                    : 'bg-white/60 backdrop-blur-md text-[#0d0d0d] border border-[#0d0d0d]/10 shadow-[0_10px_30px_0_rgba(13,13,13,0.05)]'
                }`}
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-[#0d0d0d]/5 text-[#3a3a3a]">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-[#77756f]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-5xl font-extrabold font-mono tracking-tight text-[#0d0d0d]">
                    {item.number}
                  </h3>
                </div>

                <div className="mt-10 pt-6 border-t border-[#0d0d0d]/10">
                  <h4 className="font-bold text-base text-[#0d0d0d]">{item.title}</h4>
                  <p className="text-xs mt-2 leading-relaxed text-[#3a3a3a]">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}