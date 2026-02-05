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
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [videoPlayed, setVideoPlayed] = useState(false);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true);
              sectionObserver.unobserve(entry.target);
            }
          },
          { threshold: 0.3 }
        );
    
        const cardsObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !videoPlayed) {
              videoRef.current?.play();
              setVideoPlayed(true);
              cardsObserver.unobserve(entry.target);
            }
          },
          { threshold: 1.0 } // When cards are fully in view
        );

        const currentSectionRef = sectionRef.current;
        if (currentSectionRef) {
          sectionObserver.observe(currentSectionRef);
        }

        const currentCardsRef = cardsRef.current;
        if (currentCardsRef) {
          cardsObserver.observe(currentCardsRef);
        }
    
        return () => {
          if (currentSectionRef) sectionObserver.unobserve(currentSectionRef);
          if (currentCardsRef) cardsObserver.unobserve(currentCardsRef);
        };
      }, [videoPlayed]);

  return (
    <div ref={sectionRef} className="h-screen relative rounded-lg bg-card text-card-foreground overflow-hidden">
        <div className={cn(
          "absolute top-24 inset-x-0 z-30 text-center px-6 transition-opacity duration-1000",
          inView ? "opacity-100" : "opacity-0"
        )}>
            <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
                KUSD: The Yield-Bearing Stablecoin
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
                A decentralized, over-collateralized stablecoin designed for the instant economy.
            </p>
        </div>

        <video
            ref={videoRef}
            src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/aaaaaaa.webm"
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        <div ref={cardsRef} className="absolute inset-x-0 bottom-6 z-20 flex justify-center">
            <div className="flex gap-4 p-6">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className={cn(
                                "w-56 pointer-events-auto opacity-0 translate-y-12 transition-all duration-700 ease-out",
                                inView && 'opacity-100 translate-y-0'
                            )}
                            style={{ transitionDelay: `${500 + index * 200}ms` }}
                        >
                            <div className="bg-white p-4 text-center flex flex-col justify-center items-center rounded-md border border-gray-100 shadow-lg h-full">
                                <div className={cn(
                                    "p-2 bg-primary/10 mb-2 rounded-md opacity-0",
                                    inView && "animate-scale-in"
                                )}
                                style={{ animationDelay: `${700 + index * 200}ms` }}>
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
  );
}
