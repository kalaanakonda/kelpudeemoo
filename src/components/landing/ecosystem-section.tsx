"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const ecosystemPartners = [
  'partner-pendle',
  'partner-symbiotic',
  'partner-aave',
  'partner-etherfi',
  'partner-eigenlayer',
  'partner-uniswap',
  'partner-arbitrum',
  'partner-coinbase',
].map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

export function EcosystemSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
            <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase mb-4">
                Powering the rsETH Ecosystem
            </h2>
            <p className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight max-w-2xl mx-auto">
                A borderless financial network for on-demand earning.
            </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {ecosystemPartners.map((partner, index) => partner && (
                    <div
                        key={partner.id}
                        className={cn("opacity-0", inView && "animate-slide-in-up")}
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                        <Image
                            src={partner.imageUrl}
                            alt={partner.description}
                            data-ai-hint={partner.imageHint}
                            width={120}
                            height={60}
                            className="object-contain h-12 w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}