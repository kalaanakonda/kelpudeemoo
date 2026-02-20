"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Box, CircleDollarSign, Percent } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function KernelTokenSection() {
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

  const stats = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      label: 'Total Supply',
      value: '1,000,000,000',
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-primary" />,
      label: 'Initial Price',
      value: '$0.10',
    },
    {
      icon: <Percent className="w-6 h-6 text-primary" />,
      label: 'Staking APR',
      value: '15%',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
            <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
              The KELP Token
            </h2>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed font-light">
              KELP is the utility token that powers the Kelp ecosystem. Stake KELP to earn rewards, participate in governance, and get access to exclusive features.
            </p>
            <Button>
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className={cn("space-y-4 opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-md">
                <div className="p-3 bg-primary/10 rounded-md">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-normal font-heading text-black">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
