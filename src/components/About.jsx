import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Section isolation: Fades in smoothly when scrolling into view, fades out when leaving
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.1, 1, 1, 0.1]);
  const sectionScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.96, 1, 1, 0.96]);

  const [isFlipped, setIsFlipped] = useState(false);

  // Mouse interaction for synchronized 3D swinging physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 45, damping: 12 });
  const mouseYSpring = useSpring(y, { stiffness: 45, damping: 12 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const cardSwing = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-24 px-8 bg-[#FDFBF7] border-t border-[#EBE7DF] overflow-hidden relative transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Left: Bio Details from Resume */}
        <div className="lg:col-span-6 z-30 relative">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-6">
            Architecting intelligent systems with precision.
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Versatile Electronics and Communication Engineering graduate with a robust technical foundation spanning software development, embedded hardware, data workflows, and operational process optimization.
          </p>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="border-l-2 border-black pl-4">
              <h4 className="font-bold text-lg">Degree</h4>
              <p className="text-neutral-500">B.Tech ECE (Vel Tech Univ)</p>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h4 className="font-bold text-lg">CGPA</h4>
              <p className="text-neutral-500">8.5 / 10.0</p>
            </div>
          </div>
        </div>

        {/* Right: Realistic ID Card with 3D Fabric Lanyard & Metallic Hook */}
        <div 
          className="lg:col-span-6 flex flex-col items-center justify-center relative pt-36 cursor-grab active:cursor-grabbing z-20"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Synchronized 3D Container */}
          <motion.div
            style={{ 
              rotateX, 
              rotateY, 
              rotate: cardSwing,
              transformStyle: "preserve-3d" 
            }}
            className="relative flex flex-col items-center"
          >
            {/* SVG Fabric Lanyard Ribbon */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[540px] h-40 pointer-events-none z-30 overflow-visible hidden lg:block">
              <svg viewBox="0 0 540 140" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="fabricGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#4A0404" />
                    <stop offset="15%" stopColor="#881337" />
                    <stop offset="40%" stopColor="#E11D48" />
                    <stop offset="70%" stopColor="#9F1239" />
                    <stop offset="100%" stopColor="#4A0404" />
                  </linearGradient>
                  <linearGradient id="fabricSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D1D5DB" />
                    <stop offset="30%" stopColor="#F3F4F6" />
                    <stop offset="50%" stopColor="#9CA3AF" />
                    <stop offset="80%" stopColor="#E5E7EB" />
                    <stop offset="100%" stopColor="#6B7280" />
                  </linearGradient>
                  <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.35" />
                  </filter>
                </defs>

                <path
                  d="M 20 80 Q 200 -30, 270 115"
                  fill="transparent"
                  stroke="url(#fabricGrad)"
                  strokeWidth="32"
                  strokeLinecap="round"
                  filter="url(#shadow3D)"
                />
                <path
                  d="M 20 80 Q 200 -30, 270 115"
                  fill="transparent"
                  stroke="url(#fabricSheen)"
                  strokeWidth="32"
                  strokeLinecap="round"
                />

                <g filter="url(#shadow3D)">
                  <rect x="252" y="90" width="36" height="22" rx="4" fill="url(#metalGrad)" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="260" y1="90" x2="260" y2="112" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="268" y1="90" x2="268" y2="112" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="276" y1="90" x2="276" y2="112" stroke="#4B5563" strokeWidth="1.5" />
                  <line x1="284" y1="90" x2="284" y2="112" stroke="#4B5563" strokeWidth="1.5" />
                </g>

                <g filter="url(#shadow3D)" transform="translate(262, 112)">
                  <path d="M 6 0 L 10 16 L 2 16 Z" fill="url(#metalGrad)" stroke="#374151" strokeWidth="1" />
                  <circle cx="6" cy="19" r="4" fill="url(#metalGrad)" stroke="#374151" strokeWidth="1" />
                </g>
              </svg>
            </div>

            {/* Top Clip */}
            <div className="relative z-30 w-16 h-6 bg-neutral-900 rounded-t-lg mx-auto mb-1 flex items-center justify-center shadow-md border-b border-neutral-700">
              <div className="w-6 h-2 bg-neutral-400 rounded-full shadow-inner"></div>
            </div>

            {/* Transparent ID Card Holder Case */}
            <div className="relative z-20 p-3 bg-white/70 backdrop-blur-md border-2 border-neutral-300/80 rounded-3xl shadow-2xl">
              
              {/* Interactive ID Card */}
              <div 
                className="w-[300px] h-[440px] cursor-pointer relative rounded-2xl overflow-hidden bg-white shadow-lg border border-neutral-200"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <motion.div
                  className="w-full h-full relative p-5 flex flex-col justify-between"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of ID Card */}
                  <div className={`absolute inset-0 p-5 flex flex-col justify-between bg-white rounded-2xl ${isFlipped ? 'hidden' : 'block'}`}>
                    
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-red-600 via-red-500 to-rose-700 flex justify-between items-start p-4 text-white">
                      <span className="text-[10px] font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">DEV PASS</span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">SC</div>
                    </div>

                    <div className="flex flex-col items-center text-center mt-20">
                      <div className="w-24 h-24 rounded-full bg-neutral-100 overflow-hidden mb-3 border-4 border-white shadow-md flex items-center justify-center">
                        <span className="text-2xl font-extrabold text-neutral-800">SC</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-neutral-900">Surisetti Charan</h3>
                      <p className="text-xs font-semibold text-red-600">B.Tech ECE Graduate</p>
                    </div>

                    <div className="space-y-1.5 text-left text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200 font-mono">
                      <div className="flex justify-between"><span className="text-neutral-500">CGPA:</span><span className="font-bold">8.5 / 10.0</span></div>
                      <div className="flex justify-between"><span className="text-neutral-500">Status:</span><span className="text-emerald-600 font-bold">● Available</span></div>
                      <div className="flex justify-between"><span className="text-neutral-500">Focus:</span><span>Software & ECE</span></div>
                    </div>

                    <div className="border-t border-neutral-200 pt-2 flex flex-col items-center">
                      <span className="text-[9px] text-neutral-400 mb-1">CLICK CARD TO FLIP</span>
                      <div className="w-full h-5 bg-neutral-900 rounded flex items-center justify-center gap-[2px] px-2 opacity-80">
                        <div className="w-[2px] h-full bg-white"></div><div className="w-[4px] h-full bg-white"></div>
                        <div className="w-[1px] h-full bg-white"></div><div className="w-[3px] h-full bg-white"></div>
                      </div>
                    </div>
                  </div>

                  {/* Back of ID Card */}
                  <div className={`absolute inset-0 p-5 flex flex-col justify-between bg-neutral-900 text-white rounded-2xl ${isFlipped ? 'block' : 'hidden'}`} style={{ transform: 'rotateY(180deg)' }}>
                    <div>
                      <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                        <span className="text-[10px] font-bold tracking-widest text-red-500">SECURE ACCESS</span>
                        <span className="text-[10px] text-neutral-500 font-mono">STACK INFO</span>
                      </div>
                      <h4 className="text-sm font-bold mt-4 mb-2 text-neutral-200">Core Expertise</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Python, Django, JavaScript, SQL, Embedded C, Microcontrollers, IoT Systems & Deep Learning.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-neutral-300 bg-neutral-800/60 p-3 rounded-xl border border-neutral-800">
                      <div className="flex justify-between border-b border-neutral-700 pb-1">
                        <span className="text-neutral-400">Location:</span>
                        <span>Chennai / Vizag</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Clearance:</span>
                        <span className="text-emerald-400 font-semibold">Level 5 (Admin)</span>
                      </div>
                    </div>

                    <div className="text-center text-[10px] text-neutral-500 pt-2 border-t border-neutral-800">
                      Click card again to flip back ↺
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}