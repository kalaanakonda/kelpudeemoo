"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <DollarSign className="w-4 h-4 text-primary" />,
    title: 'Pegged to USD',
    description: 'KUSD maintains a 1:1 peg with the US Dollar.',
  },
  {
    icon: <Shield className="w-4 h-4 text-primary" />,
    title: 'Over-collateralized',
    description: 'Backed by a diversified basket of crypto assets.',
  },
  {
    icon: <BarChart className="w-4 h-4 text-primary" />,
    title: 'Yield Bearing',
    description: 'Earn native yield just by holding KUSD.',
  },
];

export function KusdSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);

    return () => {
      if (sectionEl) {
        observer.unobserve(sectionEl);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-card text-card-foreground overflow-hidden relative min-h-screen">
      <div className="relative min-h-screen w-full flex flex-col items-center justify-between text-center p-6 py-24 md:p-12 md:py-32 z-10">
        <div className={cn("max-w-6xl mx-auto opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight text-black">
              KUSD: The Yield-Bearing Stablecoin
          </h2>
        </div>
        
        <div className={cn("max-w-5xl mx-auto w-full opacity-0", inView && "animate-slide-in-up")} style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-start text-left gap-4 bg-white p-6 rounded-lg border"
                        >
                            <div className="p-3 bg-primary/10 rounded-md">
                              {React.cloneElement(feature.icon, {className: "w-4 h-4 text-primary"})}
                            </div>
                            <div>
                                <h3 className="font-heading text-base text-black font-normal mb-1">{feature.title}</h3>
                                <p className="text-xs text-slate-500 max-w-[180px]">{feature.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
