"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;
        const text = textRef.current;
        const cards = cardsRef.current;

        // Ensure all elements are available before setting up animations
        const ready = video && section && text && cards;
        if (!ready) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=2500', // Duration of the pinned animation
                scrub: 1,
                pin: true,
                onEnter: () => {
                  // Ensure video is ready to play
                  if(video.readyState >= 3) {
                    video.play();
                  } else {
                    video.oncanplay = () => video.play();
                  }
                },
            },
        });
        
        // Fade out text as cards come in
        tl.to(text, {
            opacity: 0,
            ease: "power1.inOut",
        }, 0.1); // Start fading out text early

        // Animate cards sliding in
        tl.fromTo(cards, 
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, ease: "power2.out" },
            0.2
        );
    
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

  return (
    <div ref={sectionRef} className="h-screen relative rounded-lg bg-card text-card-foreground overflow-hidden">
        <div ref={textRef} className={cn(
          "absolute top-24 inset-x-0 z-30 text-center px-6 transition-opacity duration-1000",
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

        <div ref={cardsRef} className="absolute inset-x-0 bottom-6 z-20 flex justify-center opacity-0">
            <div className="flex gap-4 p-6">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={index}
                            className="w-56 pointer-events-auto"
                        >
                            <div className="bg-white p-4 text-center flex flex-col justify-center items-center rounded-md border border-gray-100 shadow-lg h-full">
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
  );
}
