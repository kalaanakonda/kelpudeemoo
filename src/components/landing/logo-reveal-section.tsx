"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const RevealLogo = ({ partner, index }: { partner: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Start animation when 10% of the logo is visible
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
    <div
      ref={ref}
      key={partner.id}
      className={cn(
        'transition-all duration-500 ease-in-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      <Image
        src={partner.imageUrl}
        alt={partner.description}
        data-ai-hint={partner.imageHint}
        width={120}
        height={40}
        className="mx-auto h-8 w-auto object-contain transition-all"
      />
    </div>
  );
};


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
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 items-center"
        >
          {partners.map((partner, index) => {
            if (!partner) return null;
            return (
              <RevealLogo key={partner.id} partner={partner} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
