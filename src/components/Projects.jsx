import React from 'react';
import cafeFinderImg from '../assets/cafefinder.png';
import coffeeshopImg from '../assets/coffeeshop.png';

export default function Projects() {
  const projectList = [
    {
      title: "The Zestora – Coffee Shop Website",
      description: " Developed a full-stack coffee shop website that allows customers to browse products, place orders, and explore menu items online. ",
      tags: ["HTML","css","JS", "Node.js", "MySQL", ],
      image: coffeeshopImg
    },
    {
      title: "Cafe Finder",
      description: "A mobile app that helps users discover and explore nearby cafes with real-time ratings, menu browsing, and location-based recommendations.",
      tags: ["React Native", "Firebase", "Google Maps API"],
      image: cafeFinderImg
    },
    
    {
      title: "EduPath Lanka",
      description: "An educational pathway platform connecting Sri Lankan students with higher education opportunities, scholarship information, and career guidance resources.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "TravelPilot",
      description: "A comprehensive travel planning web platform featuring a dynamic itinerary generator, custom routes, and destination discovery guides designed for exploring Sri Lanka.",
      tags: ["Flutter", "Node.js", "Express.js"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto w-full border-t border-purple-950/40 bg-[#0d0b14] relative overflow-hidden">
      
      {/* ================= HIGHLY EYE-CATCHING BACKGROUND HIGHLIGHTS ================= */}
      {/* Neon Section Top Border Laser Accent Glow Bars */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-[3px] opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

      {/* Intense Animated Mesh Gradient Orb 1 (Center Left) */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/15 via-purple-600/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_40s_linear_infinite] -z-10" />

      {/* Intense Animated Mesh Gradient Orb 2 (Bottom Right) */}
      <div className="absolute bottom-[-10%] right-[-15%] w-[650px] h-[650px] bg-gradient-to-bl from-purple-500/20 via-pink-600/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_50s_linear_infinite] -z-10" />

      {/* Modern Tech Grid Pattern Overlay Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#221e36_1px,transparent_1px),linear-gradient(to_bottom,#221e36_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />
      {/* ============================================================================= */}

      {/* Section Header Block matching layout exact structure */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4 relative z-10">
        <div className="text-left space-y-2">
          <h4 className="text-xs font-bold tracking-widest text-[#f43f5e] uppercase">
            Projects
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight">
            Featured Work
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-xs text-left md:text-right leading-relaxed">
          A selection of projects that showcase my skills and passion for building great software.
        </p>
      </div>

      {/* 3-Column Grid Container Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left w-full relative z-10">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#131124]/40 border border-purple-500/10 rounded-3xl overflow-hidden flex flex-col h-full backdrop-blur-md transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_15px_40px_rgba(236,72,153,0.08)] shadow-[0_0_50px_-20px_rgba(168,85,247,0.15)] group"
          >
            {/* Made image section slightly smaller with aspect-video */}
            <div className="relative aspect-video w-full overflow-hidden bg-purple-950/20">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-75 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Vibrant Cosmic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c15] via-transparent to-transparent opacity-95" />
            </div>

            {/* Project Content Box with snugger p-5 padding */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges wrap flex list container */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-2.5 py-1 bg-[#1d1225]/90 border border-pink-500/20 rounded text-[10px] font-semibold text-[#f43f5e] tracking-wide shadow-[0_0_10px_rgba(244,63,94,0.05)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Control Interface Links */}
                
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}