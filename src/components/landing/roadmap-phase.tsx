"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';

type RoadmapPhaseProps = {
  phase: {
    quarter: string;
    title: string;
    items: string[];
    status: string;
  };
};

const PHASE_VIEWPORT_HEIGHT_VH = 60;

export function RoadmapPhase({ phase }: RoadmapPhaseProps) {
  return (
    <div className="relative pl-8 flex flex-col justify-center" style={{ height: `${PHASE_VIEWPORT_HEIGHT_VH}vh` }}>
      <div className="absolute left-2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-50 z-10"></div>
      
      <div>
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
