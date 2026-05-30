import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Java", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Web Development",
      icon: (
        <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: ["HTML & CSS", "React", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Mobile Development",
      icon: (
        <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["React Native", "Android Studio", ]
    },
    {
      title: "Databases",
      icon: (
        <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ["MySQL",  "MongoDB"]
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3.09M7 21c1.11 0 2.08-.402 2.59-1M14 12a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      ),
      skills: ["Figma", "Wireframing", "Prototyping"]
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Git & GitHub", "VS Code", "Postman", ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto w-full text-center border-t border-purple-950/40 relative overflow-hidden">
      
      {/* Background Section Accent to define space */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b14] via-[#110f1c] to-[#0d0b14] pointer-events-none opacity-50" />

      {/* ================= HIGHLY EYE-CATCHING BACKGROUND HIGHLIGHTS ================= */}
      {/* Neon Section Top Border Laser Accent Glow Bars */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-[3px] opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent pointer-events-none" />

      {/* Intense Animated Mesh Gradient Orb 1 (Top Right) */}
      <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/20 via-pink-600/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_50s_linear_infinite] -z-10" />

      {/* Intense Animated Mesh Gradient Orb 2 (Bottom Left) */}
      <div className="absolute bottom-[-15%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-bl from-pink-500/20 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_35s_linear_infinite] -z-10" />

      {/* Modern Tech Grid Pattern Overlay Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#221e36_1px,transparent_1px),linear-gradient(to_bottom,#221e36_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />
      {/* ============================================================================= */}

      <div className="space-y-4 mb-16 relative z-10">
        <h4 className="text-xs font-bold tracking-widest text-pink-500 uppercase">
          Skills
        </h4>
        <h2 className="text-5xl font-bold text-white font-serif tracking-tight">
          Technologies I work with
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          A curated toolkit built through hands-on projects and continuous learning
        </p>
      </div>

      {/* Grid Layout identical to design layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left relative z-10">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-[#131124]/40 border border-purple-500/10 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_10px_40px_rgba(236,72,153,0.08)] shadow-[0_0_50px_-20px_rgba(168,85,247,0.15)] group"
          >
            {/* Header Content containing Tag Icon + Category Title */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-[#1c1936]/60 rounded-xl border border-white/5 group-hover:border-pink-500/30 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-gray-200 tracking-wide group-hover:text-white transition-colors duration-300">
                {category.title}
              </h3>
            </div>

            {/* Rendered Skill Badges inside Row Flex Wrap Wrapper */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx} 
                  className="px-3 py-1.5 bg-[#17142b]/80 border border-white/5 rounded-full text-xs font-medium text-pink-400/90 hover:text-pink-400 hover:border-pink-500/30 hover:bg-[#1c1936] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}