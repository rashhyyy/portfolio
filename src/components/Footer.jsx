import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0b14] text-gray-400 text-sm border-t border-purple-950/40">
      
      {/* Upper Content Matrix Layout Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
        
        {/* Column 1: Brand Introduction Block (5 Cols Wide) */}
        <div className="lg:col-span-5 space-y-5">
          <h3 className="text-2xl font-bold font-serif text-white tracking-wide">
            Rashmi
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Software Engineering undergraduate building elegant, user-centered digital experiences. Open to internship opportunities.
          </p>
          
          {/* Quick Round Box Social Anchors Vector Icons Row */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 bg-[#12101e] hover:bg-[#1f1a35] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#f43f5e] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 bg-[#12101e] hover:bg-[#1f1a35] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#f43f5e] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              href="mailto:your@email.com" 
              className="w-9 h-9 bg-[#12101e] hover:bg-[#1f1a35] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#f43f5e] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9+6h.01M21 16v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links (2 Cols Wide) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><a href="#home" className="hover:text-[#f43f5e] transition-all">Home</a></li>
            <li><a href="#about" className="hover:text-[#f43f5e] transition-all">About</a></li>
            <li><a href="#skills" className="hover:text-[#f43f5e] transition-all">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#f43f5e] transition-all">Projects</a></li>
            <li><a href="#education" className="hover:text-[#f43f5e] transition-all">Education</a></li>
          </ul>
        </div>

        {/* Column 3: Connection Links (2 Cols Wide) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest">
            Connect
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#f43f5e] transition-all">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#f43f5e] transition-all">LinkedIn</a></li>
            <li><a href="mailto:your@email.com" className="hover:text-[#f43f5e] transition-all">Email</a></li>
          </ul>
        </div>

        {/* Column 4: Hiring Status Badge Unit Panel (3 Cols Wide) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-widest">
            Status
          </h4>
          <div className="space-y-3">
            {/* Pulsing Active Employment Status Tracker Mark */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to internships
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Based in Sri Lanka · Available remotely
            </p>
          </div>
        </div>

      </div>

      {/* Lower Copyright Signature Info Row Block */}
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-purple-950/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
        <p>© 2026 Rashmi. All rights reserved.</p>
        <p className="font-medium tracking-wide">
          Built with <span className="text-[#f43f5e]">♥</span> and lots of curiosity
        </p>
      </div>

    </footer>
  );
}