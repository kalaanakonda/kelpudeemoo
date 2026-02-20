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

  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [coinVisible, setCoinVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadlineVisible(true);
          setTimeout(() => {
            setCoinVisible(true);
            if (videoRef.current && !hasPlayed) {
              videoRef.current.play();
              setHasPlayed(true);
            }
          }, 500); // delay after headline
          setTimeout(() => {
            setFeaturesVisible(true);
          }, 1000); // delay after coin
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionEl);

    return () => {
      if (sectionEl) {
        observer.unobserve(sectionEl);
      }
    };
  }, [hasPlayed]);

  return (
    <div ref={sectionRef} className="bg-card text-card-foreground overflow-hidden py-24">
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center p-6 gap-12">
        
        <div className={cn("max-w-6xl mx-auto opacity-0", headlineVisible && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight text-black">
              KUSD: The Yield-Bearing Stablecoin
          </h2>
        </div>
        
        <div className={cn("opacity-0", coinVisible && "animate-scale-in")} style={{animationDelay: '0.2s'}}>
            <video
                ref={videoRef}
                src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/coinn.webm"
                playsInline
                muted
                className="w-full max-w-sm h-auto rounded-full shadow-2xl"
            />
        </div>
        
        <div className={cn("max-w-5xl mx-auto w-full opacity-0", featuresVisible && "animate-slide-in-up")} style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-start text-left gap-4 text-black bg-white p-6 rounded-lg shadow-lg"
                        >
                            <div className="p-3 bg-primary/10 rounded-md">
                              {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-heading text-base text-black font-normal mb-1">{feature.title}</h3>
                                <p className="text-xs text-slate-600 max-w-[180px]">{feature.description}</p>
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
