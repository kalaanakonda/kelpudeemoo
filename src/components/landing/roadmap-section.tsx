"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

const roadmapPhases = [
  {
    quarter: 'Q3 2024',
    title: 'Protocol Launch',
    items: ['rsETH Launch on Mainnet', 'Integration with 5+ DeFi protocols', 'Initial Security Audits'],
    status: 'completed',
  },
  {
    quarter: 'Q4 2024',
    title: 'KUSD Stablecoin',
    items: ['Launch KUSD yield-bearing stablecoin', 'Integrate KUSD into lending markets', 'Expand to 2+ L2s'],
    status: 'in-progress',
  },
  {
    quarter: 'Q1 2025',
    title: 'Governance & Staking',
    items: ['KELP Token Generation Event (TGE)', 'Launch Governance Portal', 'Enable KELP Staking for Rewards'],
    status: 'upcoming',
  },
  {
    quarter: 'Q2 2025',
    title: 'Real-World Assets',
    items: ['Framework for tokenizing RWAs', 'Onboard first RWA partners', 'Launch RWA-backed vaults'],
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

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-0.5 h-[calc(100%-2rem)] bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className={cn("md:grid md:grid-cols-2 md:gap-12 items-start relative opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: `${0.2 + index * 0.2}s`}}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
