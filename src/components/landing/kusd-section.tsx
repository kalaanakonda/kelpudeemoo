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
      
      if (top > 0 || top < -scrollableHeight) {
        return;
      }
      
      let currentProgress = -top / scrollableHeight;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      setProgress(currentProgress);

      if (video.duration) {
        video.currentTime = currentProgress * video.duration;
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
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between rounded-xl bg-card text-card-foreground overflow-hidden">
            
            <div className="w-full h-[80vh] relative flex items-center justify-center">
                <div className={cn(
                    "absolute z-20 text-center transition-opacity duration-500 px-6",
                    progress > 0.05 ? "opacity-0 pointer-events-none" : "opacity-100"
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
                    src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/kling_20260205_Image_to_Video_The_scene__5207_0.webm"
                    playsInline
                    muted
                    preload="auto"
                    className={cn(
                        "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 z-10",
                        progress > 0.05 && progress < 0.95 ? "opacity-100" : "opacity-0"
                    )}
                />
            </div>

            <div className={cn(
                "h-[20vh] w-full flex items-center justify-center transition-all duration-500",
                progress > 0.9 ? "opacity-100" : "opacity-0 -translate-y-10"
            )}>
                <div className="max-w-4xl mx-auto px-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <div
                            key={index}
                            className="bg-gray-50 p-4 text-center flex flex-col justify-center items-center rounded-md"
                            >
                            <div className="p-2 bg-primary/10 mb-2 rounded-md">
                                {feature.icon}
                            </div>
                            <h3 className="font-heading text-base font-normal mb-1">{feature.title}</h3>
                            <p className="text-xs text-slate-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
