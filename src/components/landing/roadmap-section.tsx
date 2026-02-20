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

export function RoadmapSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn("text-center mb-16 opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
            Our Roadmap
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed font-light">
            Building the future of finance, one milestone at a time.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-4 w-0.5 h-full bg-gray-200"></div>
          
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <RoadmapPhase key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
