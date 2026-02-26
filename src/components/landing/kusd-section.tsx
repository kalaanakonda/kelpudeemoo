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
  const headingRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(sectionEl); // Only animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(sectionEl);

    return () => {
      if (sectionEl) {
        observer.unobserve(sectionEl);
      }
    };
  }, []);

  useEffect(() => {
    const headingEl = headingRef.current;
    const videoEl = videoRef.current;
    if (!headingEl || !videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Play video when the heading scrolls past the top of the viewport
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          if (!hasPlayed.current) {
            videoEl.play().catch(error => {
              console.error("Video play failed:", error);
            });
            hasPlayed.current = true;
            observer.unobserve(headingEl);
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(headingEl);

    return () => {
      if (headingEl) {
        observer.unobserve(headingEl);
      }
    };
  }, []);


  return (
    <div ref={sectionRef} className="overflow-hidden bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Headline */}
        <div ref={headingRef} className={cn("max-w-5xl mx-auto text-center opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight text-black">
            KUSD: The Yield-Bearing Stablecoin
          </h2>
        </div>
        
        {/* Video Card */}
        <div className={cn("relative z-10 w-full max-w-5xl mx-auto rounded-lg overflow-hidden border border-gray-200 shadow-xl opacity-0", inView && "animate-slide-in-up")} style={{animationDelay: '0.2s'}}>
            <video
                ref={videoRef}
                muted
                playsInline
                className="w-full h-auto"
            >
                <source src="https://github.com/kalaanakonda/kelp-vids-new/raw/refs/heads/main/kusd.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Feature Cards */}
        <div className={cn("max-w-5xl mx-auto w-full opacity-0", inView && "animate-slide-in-up")} style={{animationDelay: '0.4s'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-start text-left gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-lg"
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
