import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a234af24-1824-4357-9e60-985ff5b0b87d",
          name: name,
          email: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-7xl mx-auto w-full border-t border-purple-950/40 bg-[#0d0b14] relative overflow-hidden">
      
      {/* ================= HIGHLY EYE-CATCHING BACKGROUND HIGHLIGHTS ================= */}
      {/* Neon Section Top Border Laser Accent Glow Bars */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-[3px] opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent pointer-events-none" />

      {/* Intense Animated Mesh Gradient Orb 1 (Behind Form Fields) */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600/15 via-pink-500/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_40s_linear_infinite] -z-10" />

      {/* Intense Animated Mesh Gradient Orb 2 (Behind Social Cards) */}
      <div className="absolute bottom-[-15%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-tl from-pink-600/15 via-purple-500/5 to-transparent rounded-full blur-[140px] pointer-events-none animate-[spin_30s_linear_infinite] -z-10" />

      {/* Modern Tech Grid Pattern Overlay Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#221e36_1px,transparent_1px),linear-gradient(to_bottom,#221e36_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />
      {/* ============================================================================= */}

      {/* Section Header Block */}
      <div className="space-y-3 mb-16 text-center relative z-10">
        <h4 className="text-xs font-bold tracking-widest text-[#f43f5e] uppercase">
          Get In Touch
        </h4>
        <h2 className="text-5xl font-bold text-white font-serif tracking-tight">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed pt-1">
          I'm currently looking for internship opportunities. Feel free to reach out!
        </p>
      </div>

      {/* Two Column Layout Block Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto w-full text-left items-start relative z-10">
        
        {/* Left Column: Interactive Input Message Form Field Container (7 Columns wide on large screens) */}
        <form className="lg:col-span-7 space-y-5 w-full" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name" 
              className="w-full px-4 py-3.5 bg-[#131124]/50 border border-purple-500/10 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/40 focus:shadow-[0_0_25px_rgba(168,85,247,0.15)] backdrop-blur-md transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" 
              className="w-full px-4 py-3.5 bg-[#131124]/50 border border-purple-500/10 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/40 focus:shadow-[0_0_25px_rgba(168,85,247,0.15)] backdrop-blur-md transition-all duration-300"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
            <textarea 
              rows="5"
              maxLength="500"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your opportunity..." 
              className="w-full px-4 py-3.5 bg-[#131124]/50 border border-purple-500/10 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/40 focus:shadow-[0_0_25px_rgba(168,85,247,0.15)] backdrop-blur-md transition-all duration-300 resize-none"
            />
            {/* Character Counter Element at the bottom right */}
            <span className="absolute bottom-3 right-4 text-[11px] text-gray-600 font-mono">
              {message.length}/500
            </span>
          </div>

          {/* Solid Gradient Submission Action Trigger Button with Hover/Pulse Animation Effects */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 text-white text-sm font-bold rounded-full hover:opacity-100 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <svg className="w-4 h-4 transform rotate-45 -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
            {status && (
              <p className={`text-xs font-bold tracking-wide transition-all ${status.includes('Successfully') ? 'text-emerald-400' : 'text-pink-400'}`}>
                {status}
              </p>
            )}
          </div>
        </form>

        {/* Right Column: Platform Social Anchor Links (5 Columns wide on large screens) */}
        <div className="lg:col-span-5 space-y-6 w-full lg:pt-7">
          <h3 className="text-xl font-bold text-white tracking-wide mb-2">
            Connect with me
          </h3>

          <div className="space-y-3 w-full">
            
            {/* GitHub Card */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-[#131124]/40 border border-purple-500/10 rounded-2xl backdrop-blur-md group hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] shadow-[0_0_40px_-20px_rgba(168,85,247,0.15)] transition-all duration-300 ease-out transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#1d1225] rounded-xl border border-pink-500/10 flex items-center justify-center text-[#f43f5e] group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-pink-400 transition-colors duration-300">GitHub</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Explore my code</p>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-[#f43f5e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sm font-bold">↗</span>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-[#131124]/40 border border-purple-500/10 rounded-2xl backdrop-blur-md group hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] shadow-[0_0_40px_-20px_rgba(168,85,247,0.15)] transition-all duration-300 ease-out transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#1d1225] rounded-xl border border-pink-500/10 flex items-center justify-center text-[#f43f5e] group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-pink-400 transition-colors duration-300">LinkedIn</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Let's connect professionally</p>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-[#f43f5e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sm font-bold">↗</span>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:your@email.com" 
              className="flex items-center justify-between p-4 bg-[#131124]/40 border border-purple-500/10 rounded-2xl backdrop-blur-md group hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] shadow-[0_0_40px_-20px_rgba(168,85,247,0.15)] transition-all duration-300 ease-out transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#1d1225] rounded-xl border border-pink-500/10 flex items-center justify-center text-[#f43f5e] group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9+6h.01M21 16v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-pink-400 transition-colors duration-300">Email</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send me a message</p>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-[#f43f5e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sm font-bold">↗</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}