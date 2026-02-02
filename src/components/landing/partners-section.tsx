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
];

const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

export function PartnersSection() {
  const displayPartners = [...partners, ...partners, ...partners];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const containerRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const ITEM_WIDTH = 192;
  const GAP = 120;
  const STEP = ITEM_WIDTH + GAP;

  useEffect(() => {
    if (partners.length === 0) return;
    
    let timeoutId: NodeJS.Timeout;

    const moveNext = () => {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    };

    if (currentIndex >= partners.length * 2) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentIndex(partners.length); 
      }, 500);
    } else {
      timeoutId = setTimeout(moveNext, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, partners.length]);
  
  // Set initial index to start the loop
  useEffect(() => {
    if (partners.length > 0) {
      setCurrentIndex(partners.length);
    }
  }, [partners.length]);

  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-16">
         <div className="lg:w-2/5 flex-shrink-0 pt-2 relative z-10 bg-white">
            <h2 className="text-4xl md:text-5xl font-normal font-heading text-black leading-[1.1] tracking-tight">
              Powering the <br/> rsETH Ecosystem
            </h2>
         </div>
         
         <div className="lg:w-3/5 w-full flex flex-col pt-4 items-center md:items-start">
            
            <div ref={containerRef} className="w-full max-w-[800px] overflow-hidden ticker-mask relative py-8"> 
                <div 
                  className="flex gap-[120px] w-max items-center pl-[264px] will-change-transform" 
                  style={{ 
                    transform: `translateX(-${currentIndex * STEP}px)`,
                    transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)' : 'none'
                  }}
                >
                    {displayPartners.map((partner, index) => {
                      if (!partner) return null;
                      const isActive = index === currentIndex;
                      
                      return (
                        <div 
                          key={`${partner.id}-${index}`}
                          ref={el => itemsRef.current[index] = el}
                          className="flex-shrink-0 w-48 h-20 flex items-center justify-center origin-center"
                          style={{
                            transition: isTransitioning ? 'all 0.5s cubic-bezier(0.2, 0, 0.2, 1)' : 'none',
                            transform: isActive ? 'scale(1.5)' : 'scale(0.6)',
                            opacity: isActive ? 1 : 0.4,
                            filter: isActive ? 'none' : 'grayscale(100%)'
                          }}
                        >
                            <Image
                              src={partner.imageUrl}
                              alt={partner.description}
                              data-ai-hint={partner.imageHint}
                              width={192}
                              height={80}
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
