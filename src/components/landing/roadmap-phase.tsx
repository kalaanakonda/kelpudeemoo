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
      { threshold: 0.4 } // Trigger when 40% of the element is visible
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
    <div ref={ref} className={cn("md:grid md:grid-cols-2 md:gap-12 items-start relative opacity-0", inView && "animate-slide-in-up")}>
      <div className={cn("md:text-right", index % 2 === 0 ? 'md:order-1' : 'md:order-2')}>
        <p className="text-primary font-semibold mb-1">{phase.quarter}</p>
        <h3 className="text-xl font-heading text-black font-normal">{phase.title}</h3>
      </div>
      
      <div className={cn("mt-4 md:mt-0 relative", index % 2 === 0 ? 'md:order-2' : 'md:order-1')}>
        <div className="absolute -left-5 md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-gray-50"></div>
        <ul className="space-y-2 text-sm text-slate-600 pl-4 md:pl-0">
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
