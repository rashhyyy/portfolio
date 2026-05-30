import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 max-w-7xl mx-auto w-full text-center border-t border-purple-950/40 relative bg-[#0d0b14] overflow-hidden">
      
      {/* ================= HIGHLY EYE-CATCHING BACKGROUND HIGHLIGHTS ================= */}
      {/* Neon Section Top Border Laser Accent Glow Bars */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[3px] opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

      {/* Intense Animated Mesh Gradient Orb 1 (Top Left Ambient Fill) */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/15 via-purple-600/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_45s_linear_infinite] -z-10" />

      {/* Intense Animated Mesh Gradient Orb 2 (Bottom Right Ambient Fill) */}
      <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/20 via-pink-600/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_55s_linear_infinite] -z-10" />

      {/* Modern Tech Grid Pattern Overlay Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#221e36_1px,transparent_1px),linear-gradient(to_bottom,#221e36_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />
      {/* ============================================================================= */}

      {/* Title Header Block */}
      <div className="space-y-3 mb-16 relative z-10">
        <h4 className="text-xs font-bold tracking-widest text-[#f43f5e] uppercase">
          Education
        </h4>
        <h2 className="text-5xl font-bold text-white font-serif tracking-tight">
          Academic Journey
        </h2>
      </div>

      {/* Timeline Wrapper Container */}
      <div className="max-w-4xl mx-auto relative text-left mt-12 pl-8 md:pl-12 z-10">
        
        {/* Vertical Decorative Left Timeline Line Accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent">
          {/* Glowing Pink Timeline Node Double Ring Circle Dot */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f43f5e]/20 border border-[#f43f5e] flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.5)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
          </div>
        </div>

        {/* Major Degree Info Card Asset Box */}
        {/* Enhanced with unified deep translucent borders, blur, and high-contrast ambient glow drop shadows */}
        <div className="bg-[#131124]/40 border border-purple-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md relative transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-[0_15px_40px_rgba(236,72,153,0.1)] shadow-[0_0_50px_-15px_rgba(168,85,247,0.15)] group">
          
          {/* Degree Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide font-serif group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 transition-all duration-300">
                Bachelor of Software Engineering (Honours)
              </h3>
              <p className="text-sm font-semibold text-[#f43f5e] tracking-wide mt-1">
                Open University of Sri Lanka <span className="text-gray-600 mx-2">•</span> <span className="text-gray-400 font-normal">2023 - Present</span>
              </p>
            </div>
            
            {/* Year Status Pill Badge */}
            <span className="self-start sm:self-center px-4 py-1 bg-[#251327] border border-pink-500/30 text-[#f43f5e] text-xs font-bold rounded-full tracking-wide shadow-[0_0_15px_rgba(244,63,94,0.1)]">
              Third Year
            </span>
          </div>

          {/* Core Curriculum Description Summary */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
            Currently pursuing a comprehensive software engineering degree covering software design patterns, database 
            systems, web and mobile application development, software quality assurance, and project management.
          </p>

          {/* Academic Milestone Tag Highlights Row */}
          

        </div>

      </div>
    </section>
  );
}