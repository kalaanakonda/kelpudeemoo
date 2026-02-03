"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const partnerIds = [
  'partner-pendle',
  'partner-symbiotic',
  'partner-aave',
  'partner-etherfi',
  'partner-eigenlayer',
  'partner-uniswap',
  'partner-balancer',
  'partner-arbitrum',
  'partner-coinbase',
];

const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

export function LogoRevealSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
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
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-normal text-black tracking-tight">
                Trusted by Industry Leaders
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto leading-relaxed font-light">
                Our ecosystem is supported by a growing network of the most reputable projects and partners in the DeFi space.
            </p>
        </div>
        <div
          ref={sectionRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 items-center"
        >
          {partners.map((partner, index) => {
            if (!partner) return null;
            return (
              <div
                key={partner.id}
                className={cn(
                  'transition-all duration-700 ease-in-out',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <Image
                  src={partner.imageUrl}
                  alt={partner.description}
                  data-ai-hint={partner.imageHint}
                  width={120}
                  height={40}
                  className="mx-auto h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
