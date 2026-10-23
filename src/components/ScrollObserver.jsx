import React, { useEffect, useState } from 'react';

export default function ScrollObserver() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 1. Intersection Observer for reveal-on-scroll elements
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    });

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
      elements.forEach((el) => {
        if (!el.dataset.observed) {
          el.dataset.observed = 'true';
          observer.observe(el);
        }
      });
    };

    observeAll();

    // 2. Scroll listener for progress indicator and scroll-to-top button
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
      setShowScrollTop(totalScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Re-check periodically or on mutations for dynamic items
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Top glowing neon scroll progress bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 z-50 transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(244,63,94,0.8)] pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating smooth Scroll-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-[#151126]/90 border border-pink-500/40 text-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.35)] hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </>
  );
}
