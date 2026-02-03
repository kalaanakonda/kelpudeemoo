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

      const scrollableHeight = el.offsetHeight - window.innerHeight;
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

  const numLogos = partners.length;
  const radius = 350;
  const angleStep = (2 * Math.PI) / numLogos;

  return (
    <section ref={sectionRef} className="relative bg-white border-b border-gray-100" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="text-center mb-16 px-6 transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}
        >
           <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase">
              Powering the rsETH Ecosystem
            </h2>
        </div>
        
        <div 
          className="relative w-full flex-1"
          style={{ perspective: '1000px' }}
        >
          <div 
            className="absolute w-full h-full top-0 left-0"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `translateY(15vh) rotateX(${scrollProgress * 90}deg) translateZ(${scrollProgress * -800}px)`,
              opacity: Math.max(0, 1 - scrollProgress * 1.5),
            }}
          >
            {partners.map((partner, index) => {
              if (!partner) return null;
              const angle = index * angleStep;
              
              return (
                <div 
                  key={`${partner.id}-${index}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 flex items-center justify-center origin-center p-4 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg"
                  style={{
                    transform: `rotateY(${angle}rad) translateZ(${radius}px)`,
                  }}
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
    </section>
  );
};
