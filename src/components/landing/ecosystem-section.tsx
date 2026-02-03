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
  const [windowWidth, setWindowWidth] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = ref.current;
      if (currentRef) {
        const { top, height } = currentRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Animation starts when the top of the section enters the viewport
        // and completes when the section is about halfway scrolled.
        const startPoint = windowHeight;
        const endPoint = windowHeight / 2;
        const scrollDistance = startPoint - endPoint;
        const progress = (startPoint - top) / scrollDistance;

        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial calls
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getLogoStyle = (index: number, total: number) => {
    if (windowWidth === 0) {
      return { opacity: 0, transform: 'scale(0)' };
    }

    const isLeft = index % 2 === 0;
    const startX = isLeft ? -windowWidth / 2 - 100 : windowWidth / 2 + 100;
    
    // Stagger the animation start
    const delayFactor = index * 0.05;
    const easedProgress = Math.max(0, Math.min(1, (scrollProgress - delayFactor) / (1 - delayFactor)));
    const smoothProgress = Math.sin((easedProgress * Math.PI) / 2); // easeOutSine

    const currentX = startX * (1 - smoothProgress);

    // Fade out as they reach the center
    const fadeOutThreshold = 0.85;
    const opacity = easedProgress < fadeOutThreshold 
      ? easedProgress * 2 // Fade in
      : 1 - ((easedProgress - fadeOutThreshold) / (1 - fadeOutThreshold)); // Fade out

    const verticalPosition = (index - total / 2) * 40;

    return {
      transform: `translateX(${currentX}px) translateY(${verticalPosition}px) scale(${smoothProgress})`,
      opacity: Math.max(0, opacity),
      zIndex: 10,
    };
  };

  const getCenterLogoStyle = () => {
    const startThreshold = 0.8;
    
    if (scrollProgress < startThreshold) {
      return { transform: 'scale(0)', opacity: 0, zIndex: 20 };
    }
    
    const progress = (scrollProgress - startThreshold) / (1 - startThreshold);
    const scale = Math.sin((progress * Math.PI) / 2); // easeOutSine
    const opacity = progress;

    return {
      transform: `scale(${scale})`,
      opacity: opacity,
      zIndex: 20,
    };
  };

  return (
    <section ref={ref} className="bg-white py-32 relative h-[200vh] overflow-hidden">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">
            <div className={cn("transition-opacity duration-500", scrollProgress > 0.8 ? 'opacity-0' : 'opacity-100')}>
                <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase mb-4">
                    Powering the rsETH Ecosystem
                </h2>
                <p className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight max-w-2xl mx-auto">
                    A borderless financial network for on-demand earning.
                </p>
            </div>
      
            {/* Animated Logos */}
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
                        style={getLogoStyle(index, ecosystemPartners.length)}
                    >
                        <Image src={partner.imageUrl} alt={partner.description} width={60} height={60} className="object-contain" />
                    </div>
                ))}
            </div>
      </div>
    </section>
  );
}
