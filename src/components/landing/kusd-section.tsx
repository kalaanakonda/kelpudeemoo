"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: 'Pegged to USD',
    description: 'KUSD maintains a 1:1 peg with the US Dollar, providing a stable store of value.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Over-collateralized',
    description: 'Backed by a diversified basket of crypto assets to ensure stability and security.',
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: 'Yield Bearing',
    description: 'Earn native yield just by holding KUSD in your wallet.',
  },
];

export function KusdSection() {
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
      {
        threshold: 0.2,
      }
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
    <section ref={ref} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn("mb-16 text-center opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
            KUSD: The Yield-Bearing Stablecoin
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
            A decentralized, over-collateralized stablecoin designed for the instant economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn("bg-gray-50 p-10 h-[420px] text-center flex flex-col justify-center items-center opacity-0 rounded-md", inView && "animate-slide-in-up")}
              style={{ animationDelay: `${1.0 + index * 0.4}s` }}
            >
              <div className="p-3 bg-primary/10 mb-4 rounded-md">
                  {feature.icon}
              </div>
              <h3 className="font-heading text-2xl font-normal mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
