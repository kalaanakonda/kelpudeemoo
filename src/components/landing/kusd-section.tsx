"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

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
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const handleScroll = () => {
      if (titleRef.current && videoRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        if (titleRect.top <= viewportCenter) {
          // If title is at or above the viewport center, play video.
          if (videoRef.current.paused) {
            videoRef.current.play();
          }
        } else {
          // If title is below the viewport center, pause video.
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          handleScroll(); // Initial check
        } else {
          window.removeEventListener('scroll', handleScroll);
          videoRef.current?.pause(); // Pause when section is out of view
        }
      },
      { threshold: 0 }
    );

    observer.observe(sectionEl);

    return () => {
      if (sectionEl) {
        observer.unobserve(sectionEl);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="rounded-lg bg-card text-card-foreground overflow-hidden h-[150vh]">
        <div className="relative h-full w-full">
            <video
                ref={videoRef}
                src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/coinn.webm"
                playsInline
                muted
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
            />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-6 pt-32 gap-16">
                <div ref={titleRef} className="max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight text-black">
                            KUSD: The Yield-Bearing Stablecoin
                        </h2>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-start text-left gap-4 text-black bg-white p-6 rounded-lg"
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
    </div>
  );
}
