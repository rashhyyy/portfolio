import React from 'react';

export default function About() {
  return (
    /* 1. Added a top border and distinct padding to clearly separate the Hero and About sections */
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto w-full text-left border-t border-purple-950/40 relative overflow-hidden">
      
      {/* Background Section Accent to define space */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b14] via-[#110f1c] to-[#0d0b14] pointer-events-none opacity-50" />

      {/* ================= HIGHLY EYE-CATCHING BACKGROUND HIGHLIGHTS ================= */}
      {/* Neon Section Top Border Accent Glow Bar */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[3px] opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

      {/* Intense Animated Mesh Gradient Orb 1 (Left Side) */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/20 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_30s_linear_infinite] -z-10" />
      
      {/* Intense Animated Mesh Gradient Orb 2 (Right Side) */}
      <div className="absolute bottom-[-10%] right-[-20%] w-[700px] h-[700px] bg-gradient-to-bl from-purple-500/25 via-pink-600/10 to-transparent rounded-full blur-[160px] pointer-events-none animate-[spin_45s_linear_infinite] -z-10" />

      {/* Modern Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#221e36_1px,transparent_1px),linear-gradient(to_bottom,#221e36_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />
      
      {/* Hyper-Focused Radiant Backdrop behind the card container */}
      <div className="absolute right-[-5%] top-[10%] w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[110px] pointer-events-none -z-10" />
      {/* ============================================================================= */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full relative z-10">
        
        {/* Left Text Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="text-xs font-bold tracking-widest text-pink-500 uppercase">
            About Me
          </h4>
          <h2 className="text-5xl font-bold text-white font-serif tracking-tight leading-tight">
            Crafting code with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              purpose
            </span>
          </h2>
          
          <div className="text-gray-400 text-base space-y-4 leading-relaxed max-w-2xl">
            <p>
              I am a dedicated third-year Software Engineering undergraduate at the Open University 
              of Sri Lanka, driven by a deep passion for technology and innovation. My journey in 
              software development began with curiosity about how things work and has evolved into a 
              commitment to building impactful digital solutions.
            </p>
            <p>
              Beyond writing code, I have a keen eye for UI/UX design and enjoy creating interfaces 
              that are not only functional but also delightful to use. I thrive on solving complex 
              problems, whether it is architecting a full-stack web application or designing intuitive 
              mobile experiences.
            </p>
            <p>
              When I am not coding, you will find me exploring new technologies, contributing to 
              collaborative projects, or sketching design ideas for my next app. I believe in continuous 
              learning and am always seeking opportunities to grow as a developer and a designer.
            </p>
          </div>
        </div>

        {/* Right Info Cards Grid Column */}
        {/* Enhanced with an integrated outer purple glow shadow to match background richness */}
        <div className="lg:col-span-5 w-full bg-[#131124]/40 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-md mt-8 lg:mt-4 shadow-[0_0_60px_-15px_rgba(168,85,247,0.3)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: University */}
            <div className="bg-[#131124]/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between min-h-[120px] transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] cursor-default group">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-2 group-hover:text-pink-400 transition-colors duration-300">
                University
              </span>
              <p className="text-sm font-semibold text-gray-200 leading-snug group-hover:text-pink-300 transition-colors duration-300">
                Open University of Sri Lanka
              </p>
            </div>

            {/* Card 2: Year */}
            <div className="bg-[#131124]/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between min-h-[120px] transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] cursor-default group">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-2 group-hover:text-purple-400 transition-colors duration-300">
                Year
              </span>
              <p className="text-sm font-semibold text-gray-200 leading-snug group-hover:text-purple-300 transition-colors duration-300">
                Third Year
              </p>
            </div>

            {/* Card 3: Focus */}
            <div className="bg-[#131124]/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between min-h-[120px] transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.1)] cursor-default group">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-2 group-hover:text-pink-400 transition-colors duration-300">
                Focus
              </span>
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 leading-snug group-hover:from-pink-300 group-hover:to-pink-100 transition-all duration-300">
                Full-Stack & Mobile Development
              </p>
            </div>

            {/* Card 4: Seeking */}
            <div className="bg-[#131124]/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between min-h-[120px] transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] cursor-default group">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-2 group-hover:text-purple-400 transition-colors duration-300">
                Seeking
              </span>
              <p className="text-sm font-semibold text-gray-200 leading-snug group-hover:text-purple-300 transition-colors duration-300">
                Software Engineering Internship
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}