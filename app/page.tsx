"use client";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // @ts-ignore - KaTeX auto-render is loaded dynamically
    if (typeof renderMathInElement === 'function') {
      // @ts-ignore
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <iframe src="/paper.html" title="Paper" style={{border: 'none', width: '100%', height: '100%'}} />
    </div>
  );
}
