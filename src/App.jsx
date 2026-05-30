import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// 1. Import the new About component
import About from './components/About';
// 2. Import the new Skills component
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0b14] text-gray-300 antialiased selection:bg-pink-500 selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar />
      
      {/* 2. Main Content View */}
      <main>
        <Hero />
        {/* 2. Placed the active About component here */}
        <About />
        {/* 3. Placed the active Skills component here */}
        <Skills />
        {/* 4. Placed the active Education component here */}
        <Education />
        {/* Featured Projects Card Grid Dashboard Matrix Layout */}
        <Projects />
        {/* 2. Placed the interactive contact desk form directly at the base */}
        <Contact />
        {/* 2. Mount the final page Footer node right here */}
      <Footer />
      </main>

      {/* Future sections can be placed cleanly right here: */}
      {/* <Projects /> */}
    </div>
  );
}

export default App;