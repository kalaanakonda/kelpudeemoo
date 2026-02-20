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
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [inView, setInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          const video = videoRef.current;
          if (video && !hasPlayed) {
            video.play();
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
    <div ref={sectionRef} className="bg-black text-card-foreground overflow-hidden relative">
      <video
          ref={videoRef}
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
      >
          <source src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/coinn.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-0" />
      
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center p-6 gap-12 py-32 z-10">
        <div className={cn("max-w-6xl mx-auto opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight text-white">
              KUSD: The Yield-Bearing Stablecoin
          </h2>
        </div>
        
        <div className={cn("max-w-5xl mx-auto w-full opacity-0", inView && "animate-slide-in-up")} style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-start text-left gap-4 bg-neutral-900 p-6 rounded-lg text-white"
                        >
                            <div className="p-3 bg-primary/20 text-primary-foreground rounded-md">
                              {React.cloneElement(feature.icon, {className: "w-4 h-4 text-white"})}
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
