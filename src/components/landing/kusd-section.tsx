"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    title: 'Pegged to USD',
    description: 'KUSD maintains a 1:1 peg with the US Dollar.',
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: 'Over-collateralized',
    description: 'Backed by a diversified basket of crypto assets.',
  },
  {
    icon: <BarChart className="w-5 h-5 text-primary" />,
    title: 'Yield Bearing',
    description: 'Earn native yield just by holding KUSD.',
  },
];

export function KusdSection() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true);
              videoRef.current?.play();
              observer.unobserve(entry.target);
            }
          },
          {
            threshold: 0.2,
          }
        );
    
        const currentRef = sectionRef.current;
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
    <div ref={sectionRef} className="relative rounded-lg bg-card text-card-foreground overflow-hidden py-24">
        <video
            ref={videoRef}
            src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/aaaaaaa.webm"
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className={cn("text-center mb-16 opacity-0", inView && "animate-slide-in-up")}>
                <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
                    KUSD: The Yield-Bearing Stablecoin
                </h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
                    A decentralized, over-collateralized stablecoin designed for the instant economy.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className={cn("opacity-0", inView && "animate-slide-in-up")}
                                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                            >
                                <div className="bg-white/90 backdrop-blur-sm p-6 text-center flex flex-col justify-center items-center rounded-md border border-gray-100/50 shadow-xl h-full">
                                    <div className="p-2 bg-primary/10 mb-3 rounded-md">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-heading text-base font-normal mb-1">{feature.title}</h3>
                                    <p className="text-xs text-slate-500">{feature.description}</p>
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
