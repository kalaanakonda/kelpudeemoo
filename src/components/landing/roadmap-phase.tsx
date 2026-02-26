"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

type RoadmapPhaseProps = {
  phase: {
    quarter: string;
    title: string;
    items: string[];
    status: string;
  };
  index: number;
};

export function RoadmapPhase({ phase, index }: RoadmapPhaseProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
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
    <div ref={ref} className="relative pl-8 min-h-[70vh] flex flex-col justify-center">
      <div className="absolute left-2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-50 z-10"></div>
      
      <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
        <p className="text-primary font-semibold mb-1">{phase.quarter}</p>
        <h3 className="text-xl font-heading text-black font-normal mb-3">{phase.title}</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          {phase.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
