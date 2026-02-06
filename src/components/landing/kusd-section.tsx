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
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;
        const content = contentRef.current;

        if (video && section && content) {
            // Ensure video is loaded enough to get duration
            const onLoadedMetadata = () => {
                video.pause();

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: `+=${window.innerHeight * 2}`,
                        pin: true,
                        scrub: true,
                    },
                    defaults: { ease: "none" }
                });

                // Video scrubbing
                tl.to(video, {
                    currentTime: video.duration,
                });
                
                // Content fade in
                tl.fromTo(content, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 0);
            };

            video.addEventListener('loadedmetadata', onLoadedMetadata);
            // If video is already loaded
            if (video.readyState >= 1) {
                onLoadedMetadata();
            }

            return () => {
                video.removeEventListener('loadedmetadata', onLoadedMetadata);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        }
    }, []);

  return (
    <div ref={sectionRef} className="rounded-lg bg-card text-card-foreground overflow-hidden h-screen">
        <div className="relative h-full w-full">
            <video
                ref={videoRef}
                src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/aaaaaaa.webm"
                playsInline
                muted
                preload="metadata"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div ref={contentRef} className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 opacity-0">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight mb-4">
                            KUSD: The Yield-Bearing Stablecoin
                        </h2>
                        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-light">
                            A decentralized, over-collateralized stablecoin designed for the instant economy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                >
                                    <div className="bg-white/10 backdrop-blur-sm p-6 text-center flex flex-col justify-center items-center rounded-md border border-white/20 h-full">
                                        <div className="p-2 bg-primary/10 mb-3 rounded-md">
                                            {feature.icon}
                                        </div>
                                        <h3 className="font-heading text-base font-normal mb-1 text-white">{feature.title}</h3>
                                        <p className="text-xs text-slate-300">{feature.description}</p>
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
