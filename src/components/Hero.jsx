import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll-based auto play/pause: Pauses video when user scrolls away from the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#f4f2ee] flex flex-col justify-between overflow-hidden px-6 lg:px-16 pt-32 pb-16">
      
      {/* 1. Glassmorphism Navigation Bar at the top */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[1320px] bg-white/70 backdrop-blur-md border border-[#0d0d0d]/10 rounded-full px-6 py-3.5 flex items-center justify-between z-50 shadow-sm">
        {/* Logo / Name */}
        <a href="#hero" className="flex items-center gap-2.5 font-bold text-sm text-[#0d0d0d] font-sans">
          <span className="w-7 h-7 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center text-xs font-mono">SC</span>
          <span>Surisetti Charan</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#3a3a3a]">
          <a href="#about" className="hover:text-[#0d0d0d] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#0d0d0d] transition-colors">Skills</a>
          <a href="#work" className="hover:text-[#0d0d0d] transition-colors">Work</a>
          <a href="#experience" className="hover:text-[#0d0d0d] transition-colors">Experience</a>
          <a href="#achievements" className="hover:text-[#0d0d0d] transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-[#0d0d0d] transition-colors">Contact</a>
        </nav>

        {/* Resume Button - Replace '#' with your Google Drive Resume Link */}
        <a
          href="https://drive.google.com/file/d/1bCPmZbTvaR1ZibL4L1UZK9Iy2TZgGru6/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 bg-[#0d0d0d] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-1.5"
        >
          <span>Resume</span>
          <span className="text-[10px]">↗</span>
        </a>
      </header>

      {/* Main Hero Content Area */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 my-auto">
        
        {/* Left Side: Title & Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-center z-10"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#77756f] uppercase tracking-wider mb-4 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full w-fit border border-[#0d0d0d]/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Creative Developer & AI Systems Engineer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0d0d0d] font-sans leading-[1.05]">
            Full Stack <br />
            <span className="font-serif italic font-normal text-[#77756f]">Developer.</span>
          </h1>

          <p className="text-[#3a3a3a] text-sm lg:text-base mt-6 max-w-lg leading-relaxed">
            Motivated Full Stack Developer skilled in building scalable web applications with React, Node.js, and modern backend technologies. Strong in AI/ML development and system design.
          </p>

          {/* Action Buttons & Social / Contact Links */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#work"
              className="px-7 py-3.5 bg-[#0d0d0d] text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore work</span>
              <span>→</span>
            </a>
            <a
              href="mailto:surisetticharan36@gmail.com"
              className="px-7 py-3.5 bg-white text-[#0d0d0d] border border-[#0d0d0d]/15 text-xs font-bold rounded-full hover:border-[#0d0d0d]/40 transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Let's talk</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 mt-6 text-xs font-mono text-[#77756f]">
            <a href="https://github.com/surisetticharan" target="_blank" rel="noreferrer" className="hover:text-[#0d0d0d] transition-colors">GitHub ↗</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/charan-surisetti-691877359?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-[#0d0d0d] transition-colors">LinkedIn ↗</a>
            <span>•</span>
            <span>surisetticharan36@gmail.com</span>
          </div>
        </motion.div>

        {/* Right Side: Avatar & Background Watermark Name */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center h-[480px] lg:h-[600px]"
        >
          {/* Shaded Watermark Name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span className="text-[17vw] lg:text-[14vw] font-extrabold font-mono text-[#0d0d0d]/[0.06] tracking-tighter uppercase whitespace-nowrap">
              CHARAN
            </span>
          </div>

          {/* Character / Video Container */}
          <div className="relative w-full max-w-[400px] h-full flex items-center justify-center z-10">
            
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted={isMuted}
              playsInline 
              className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-2xl"
            >
              <source src="/avatar.mp4.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Sound Toggle Button & Status Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/10 text-xs font-mono text-[#0d0d0d] shadow-lg flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>AI Avatar Active</span>
              </div>

              {/* Mute / Unmute Interactive Button */}
              <button 
                onClick={toggleSound}
                className="bg-[#0d0d0d] text-white px-3.5 py-2 rounded-2xl text-xs font-mono shadow-lg hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {isMuted ? '🔇 Unmute' : '🔊 Mute'}
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}