import React from 'react';
// 1. Import your personal photo from the assets folder using the .jpeg extension
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center px-8 max-w-7xl mx-auto overflow-hidden w-full text-left">
      
      {/* ================= BACKGROUND AMBIEINT DESIGN ELEMENTS ================= */}
      {/* Subtle Pink Glow Behind Content */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      {/* Subtle Purple Glow Behind Image/Badges */}
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10 py-12">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="text-xs font-bold tracking-widest text-pink-500 uppercase">
            Hi, I'm
          </h4>
          <h1 className="text-6xl md:text-7xl font-bold text-white font-serif tracking-tight">
            Rashmi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Software Engineering Undergraduate
          </h2>
          <p className="text-sm text-pink-300/80 font-medium tracking-wide">
            Aspiring Full-Stack Developer
          </p>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            Passionate about creating innovative solutions through elegant code. Currently seeking internship opportunities to apply my skills in real-world projects and contribute to cutting-edge technology.💻✨
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Download CV Link Trigger */}
            <a 
              href="/Resume.pdf"
              download="Rashmi_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full hover:opacity-90 transition shadow-lg shadow-pink-500/20 text-sm cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
            
            {/* Contact Me Navigation Link */}
            <a 
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-purple-500/40 bg-purple-950/10 text-white font-medium rounded-full hover:bg-purple-500/20 transition text-sm cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-16 lg:mt-0 h-[480px]">
          
          {/* Main Neon Circular Frame */}
          <div className="relative w-76 h-76 md:w-85 md:h-85 rounded-full border border-pink-500/20 p-2 flex items-center justify-center bg-gradient-to-b from-purple-950/20 to-transparent shadow-[0_0_50px_rgba(236,72,153,0.08)] z-10">
            {/* 2. Set to flex items-center to keep the photo dead-center */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-purple-900/40 to-pink-900/20 flex items-center justify-center">
              {/* 3. Updated src to use profileImg with cover fitting classes */}
              <img 
                src={profileImg} 
                alt="Rashmi Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= FLOATING DESIGN BADGES ================= */}

          {/* JavaScript (Top Left) */}
          <div className="absolute top-12 left-0 flex flex-col items-center gap-1 animate-float-1 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <svg className="w-7 h-7 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0zm22.034 18.376c-.666-1.517-2.213-2.301-4.225-2.243-.913.029-1.74.343-2.179.805l-1.428-.876c.485-.804 1.543-1.442 3.238-1.528 2.871-.144 5.21 1.485 5.513 4.253.28 2.548-1.286 4.604-4.57 4.962-2.828.307-5.026-.95-5.597-3.37l1.583-.563c.4 1.529 1.631 2.457 3.654 2.199 1.956-.251 3.126-1.559 3.014-3.14zM11.666 12v11.124h-1.92V12h1.92z"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">JavaScript</span>
          </div>

          {/* GitHub (Top Right) */}
          <div className="absolute -top-6 right-20 flex flex-col items-center gap-1 animate-float-2 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">GitHub</span>
          </div>

          {/* Figma (Bottom Left) */}
          <div className="absolute bottom-10 -left-6 flex flex-col items-center gap-1 animate-float-3 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <svg className="w-5 h-7 text-purple-400" viewBox="0 0 15 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4.5a3.5 3.5 0 1 1 7 0v3.5H4V4.5z" fill="currentColor"/>
                <path d="M4 11.5a3.5 3.5 0 0 1 3.5-3.5H11v7H7.5A3.5 3.5 0 0 1 4 11.5z" fill="currentColor"/>
                <path d="M4 18.5a3.5 3.5 0 0 1 7 0v.5a3.5 3.5 0 0 1-7 0v-.5z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">Figma</span>
          </div>

          {/* Firebase (Bottom Center) */}
          <div className="absolute -bottom-8 left-1/3 flex flex-col items-center gap-1 animate-float-1 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <svg className="w-6 h-6 text-orange-500 fill-current" viewBox="0 0 24 24">
                <path d="M3.877 17.712L2.213 6.945a.434.434 0 01.696-.425l3.52 3.486 11.83-11.821a.435.435 0 01.734.238l3.11 19.387a.434.434 0 01-.659.458L3.877 17.712z"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">Firebase</span>
          </div>

          {/* Code Icon (Right Middle) */}
          <div className="absolute bottom-16 -right-6 flex flex-col items-center gap-1 animate-float-2 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <span className="text-pink-400 font-mono text-sm font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">Development</span>
          </div>

          {/* React (Top Mid-Right Edge) */}
          <div className="absolute top-12 right-0 flex flex-col items-center gap-1 animate-float-3 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <svg className="w-7 h-7 text-cyan-400 animate-[spin_30s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
                <circle cx="12" cy="12" r="1" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">React</span>
          </div>

          {/* Mobile Layout Badges (Left Middle Viewport) */}
          <div className="absolute top-36 -left-16 flex flex-col items-center gap-1 animate-float-2 z-20">
            <div className="w-14 h-14 bg-[#131124]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold tracking-wider">Responsive</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}