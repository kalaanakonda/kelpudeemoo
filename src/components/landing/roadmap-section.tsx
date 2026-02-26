"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { RoadmapPhase } from './roadmap-phase';

const roadmapPhases = [
  {
    quarter: 'Phase 1',
    title: 'Lorem Ipsum Dolor',
    items: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    status: 'completed',
  },
  {
    quarter: 'Phase 2',
    title: 'Ut Enim ad Minim',
    items: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', 'Nisi ut aliquip ex ea commodo consequat.'],
    status: 'in-progress',
  },
  {
    quarter: 'Phase 3',
    title: 'Duis Aute Irure',
    items: ['Duis aute irure dolor in reprehenderit in voluptate velit esse.', 'Cillum dolore eu fugiat nulla pariatur.'],
    status: 'upcoming',
  },
  {
    quarter: 'Phase 4',
    title: 'Excepteur Sint Occaecat',
    items: ['Excepteur sint occaecat cupidatat non proident.', 'Sunt in culpa qui officia deserunt mollit anim id est laborum.'],
    status: 'upcoming',
  },
];

// The height of the right-side viewport showing one phase.
const PHASE_VIEWPORT_HEIGHT_VH = 60;
// How many vh of scrolling for each phase to pass. Higher means slower/more locked scroll.
const SCROLL_SENSITIVITY_VH = 100; 

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // The total height of the scrollable track section.
  // This needs to be tall enough for the sticky container to scroll past all phases.
  // It's the initial screen height, plus the scroll distance needed for the remaining phases.
  const sectionHeightVh = 100 + (roadmapPhases.length - 1) * SCROLL_SENSITIVITY_VH;

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const { top, height } = sectionEl.getBoundingClientRect();
      // The total scrollable distance within our tall section.
      const scrollableHeight = height - window.innerHeight;
      
      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      
      // The progress (0 to 1) of scrolling through the section.
      const progress = Math.max(0, Math.min(1, (-top) / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionHeightVh]); // Dependency ensures recalculation if phases change.

  const totalPhasesContainerHeightVh = roadmapPhases.length * PHASE_VIEWPORT_HEIGHT_VH;
  // We need to translate upwards by the total height minus one phase height (which remains in view).
  const maxTranslateY = totalPhasesContainerHeightVh - PHASE_VIEWPORT_HEIGHT_VH;
  const translateY = -scrollProgress * maxTranslateY;

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-gray-50"
      style={{ height: `${sectionHeightVh}vh`}}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="md:grid md:grid-cols-3 md:gap-12 items-center">
            <div className="md:col-span-1 h-fit">
              <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
                Our Roadmap
              </h2>
              <p className="text-slate-500 max-w-md text-sm leading-relaxed font-light">
                Building the future of finance, one milestone at a time.
              </p>
            </div>

            <div 
              className="md:col-span-2 relative"
              style={{ height: `${PHASE_VIEWPORT_HEIGHT_VH}vh`, overflow: 'hidden'}}
            >
              <div 
                className="absolute top-0 left-0 w-full"
                style={{ transform: `translateY(${translateY}vh)` }}
              >
                 {/* The vertical timeline bar */}
                 <div className="absolute left-2 top-0 w-0.5 bg-gray-200" style={{ height: `${totalPhasesContainerHeightVh}vh` }}></div>
                 {roadmapPhases.map((phase, index) => (
                    <RoadmapPhase key={index} phase={phase} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
