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

const rsEthLogo = PlaceHolderImages.find(p => p.id === 'rseth-logo');

export function EcosystemSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  // Store random starting positions for each logo so they are consistent across re-renders
  const startPositions = useRef<{x: number, y: number}[]>([]);

  useEffect(() => {
    setHasMounted(true);
    
    // Only generate random positions on the client, once.
    startPositions.current = ecosystemPartners.map((_, index) => {
        const isLeft = index % 2 === 0;
        return {
          x: (isLeft ? -0.6 : 0.6) * window.innerWidth,
          y: (Math.random() - 0.5) * window.innerHeight * 0.8
        };
    });

    const handleScroll = () => {
      const currentRef = ref.current;
      if (currentRef) {
        const { top, height } = currentRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start animation when the top of the section is visible, end when it's halfway up the screen.
        const startPoint = windowHeight;
        const endPoint = windowHeight / 2;
        const scrollDistance = startPoint - endPoint;
        const progress = (startPoint - top) / scrollDistance;

        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLogoStyle = (index: number) => {
    if (!hasMounted || !startPositions.current[index]) {
      return { opacity: 0 };
    }

    const { x: startX, y: startY } = startPositions.current[index];
    
    const easedProgress = Math.sin((scrollProgress * Math.PI) / 2); // easeOutSine

    const currentX = startX * (1 - easedProgress);
    const currentY = startY * (1 - easedProgress);
    
    const scale = 1 - (easedProgress * 0.5);

    // Fade out logos as they approach the center
    const fadeOutThreshold = 0.8;
    let opacity = 0;
    if (easedProgress > 0) {
        opacity = easedProgress < fadeOutThreshold 
        ? easedProgress / fadeOutThreshold // Fade in
        : 1 - ((easedProgress - fadeOutThreshold) / (1 - fadeOutThreshold)); // Fade out
    }
    
    return {
      transform: `translate(${currentX}px, ${currentY}px) scale(${scale})`,
      opacity: Math.max(0, opacity),
      zIndex: 10,
    };
  };

  const getCenterLogoStyle = () => {
    if (!hasMounted) return { opacity: 0 };

    const startThreshold = 0.85;
    if (scrollProgress < startThreshold) {
      return { transform: 'scale(0.5)', opacity: 0, zIndex: 20 };
    }
    
    const progress = (scrollProgress - startThreshold) / (1 - startThreshold);
    const scale = 0.5 + (progress * 0.5); // Scale from 0.5 to 1
    const opacity = progress;

    return {
      transform: `scale(${scale})`,
      opacity: opacity,
      zIndex: 20,
    };
  };
  
  const getTitleStyle = () => {
    if (!hasMounted) return { opacity: 1 };
    const fadeOutProgress = Math.min(scrollProgress / 0.2, 1);
    return {
        opacity: 1 - fadeOutProgress,
        transform: `translateY(${fadeOutProgress * -20}px)`,
    }
  }

  return (
    <section ref={ref} className="bg-white py-32 relative min-h-[200vh] overflow-x-hidden">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">
            <div style={getTitleStyle()} className="transition-opacity duration-300">
                <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase mb-4">
                    Powering the rsETH Ecosystem
                </h2>
                <p className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight max-w-2xl mx-auto">
                    A borderless financial network for on-demand earning.
                </p>
            </div>
      
            {/* Animated Logos */}
            {hasMounted && (
              <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center">
                  {/* Central rsETH Logo */}
                  {rsEthLogo && (
                      <div className="absolute" style={getCenterLogoStyle()}>
                          <Image src={rsEthLogo.imageUrl} alt={rsEthLogo.description} width={128} height={128} className="object-contain" />
                      </div>
                  )}
                  
                  {/* Partner Logos */}
                  {ecosystemPartners.map((partner, index) => partner && (
                      <div
                          key={partner.id}
                          className="absolute w-24 h-24 bg-white/50 backdrop-blur-sm border border-gray-200/50 p-4 rounded-2xl shadow-lg flex items-center justify-center"
                          style={getLogoStyle(index)}
                      >
                          <Image src={partner.imageUrl} alt={partner.description} width={60} height={60} className="object-contain" />
                      </div>
                  ))}
              </div>
            )}
      </div>
    </section>
  );
}
