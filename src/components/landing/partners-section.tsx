"use client";

import React, { useState, useEffect, useRef } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const partnerIds = [
  'partner-pendle',
  'partner-symbiotic',
  'partner-aave',
  'partner-etherfi',
  'partner-eigenlayer',
  'partner-uniswap',
  'partner-arbitrum',
  'partner-coinbase',
  'partner-balancer',
];

const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

export function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const scrollableHeight = Math.max(1, el.offsetHeight - window.innerHeight);
      const amountScrolled = window.scrollY - el.offsetTop;
      
      let progress = amountScrolled / scrollableHeight;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white border-b border-gray-100" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="text-center pt-24 transition-opacity duration-500"
          style={{ 
            opacity: Math.max(0, 1 - scrollProgress * 4),
            transform: `translateY(${scrollProgress * -50}%)`
          }}
        >
           <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase">
              Powering the rsETH Ecosystem
            </h2>
        </div>
        
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ perspective: '400px' }}
        >
          <div
            className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl"
            style={{
              transform: `rotateX(30deg) translateY(${-scrollProgress * 250}%)`,
              transformOrigin: '50% 100%',
              opacity: scrollProgress > 0 ? 1 : 0
            }}
          >
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              {partners.map((partner) => {
                if (!partner) return null;
                return (
                  <div 
                    key={partner.id}
                    className="w-40 h-24 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg"
                  >
                      <Image
                        src={partner.imageUrl}
                        alt={partner.description}
                        data-ai-hint={partner.imageHint}
                        width={96}
                        height={48}
                        className="max-w-full max-h-full object-contain"
                      />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
