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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const video = videoRef.current;
      if (!container || !video) return;

      const { top, height } = container.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      let currentProgress = -top / scrollableHeight;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      
      setProgress(currentProgress);

      if (video.duration) {
        const videoTime = currentProgress * video.duration;
        // Check if the new time is significantly different to avoid unnecessary seeks
        if (Math.abs(video.currentTime - videoTime) > 0.1) {
            video.currentTime = videoTime;
        }
      }
    };
    
    const onLoadedMetadata = () => {
      videoRef.current?.pause();
      videoRef.current!.currentTime = 0;
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    };

    const video = videoRef.current;
    if (video) {
        if(video.readyState >= 3) {
            onLoadedMetadata();
        } else {
            video.addEventListener('loadedmetadata', onLoadedMetadata);
        }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video?.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full rounded-xl bg-card text-card-foreground overflow-hidden">
            
            <div className={cn(
              "absolute top-24 inset-x-0 z-30 text-center px-6 pointer-events-none transition-opacity duration-500",
              progress > 0.65 ? "opacity-0" : "opacity-100"
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
                src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/kling_20260205_%E4%BD%9C%E5%93%81_the_coin_m_5785_0.webm"
                playsInline
                muted
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />

            <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center pointer-events-none">
                <div className="flex gap-4 p-6">
                    {features.map((feature, index) => {
                        const show = progress > 0.7;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "w-56 pointer-events-auto transition-all duration-500 ease-out",
                                    show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                                )}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="bg-gray-50/80 backdrop-blur-sm p-4 text-center flex flex-col justify-center items-center rounded-md border border-white/20 h-full">
                                    <div className="p-2 bg-primary/10 mb-2 rounded-md">
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
