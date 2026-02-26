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
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (videoRef.current && !hasPlayed) {
            videoRef.current.play();
            setHasPlayed(true);
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionEl);

    return () => {
      if (sectionEl) {
        observer.unobserve(sectionEl);
      }
    };
  }, [hasPlayed]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden min-h-screen bg-black">
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://github.com/kalaanakonda/videosyogi/raw/main/final%20kelp%20(1).webm" type="video/webm" />
      </video>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between text-center p-6 py-24 md:p-12 md:py-32">
        <div className={cn("max-w-6xl mx-auto opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              KUSD: The Yield-Bearing Stablecoin
          </h2>
        </div>
        
        <div className={cn("max-w-5xl mx-auto w-full opacity-0", inView && "animate-slide-in-up")} style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-start text-left gap-4 bg-white/20 backdrop-blur-lg text-white p-6 rounded-lg border border-white/30"
                        >
                            <div className="p-3 bg-primary/10 rounded-md">
                              {React.cloneElement(feature.icon, {className: "w-4 h-4 text-primary"})}
                            </div>
                            <div>
                                <h3 className="font-heading text-base text-white font-normal mb-1">{feature.title}</h3>
                                <p className="text-xs text-slate-300 max-w-[180px]">{feature.description}</p>
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