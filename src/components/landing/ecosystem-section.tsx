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
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = ref.current;
      if (currentRef) {
        const { top, height } = currentRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress from when the top of the section hits the middle of the screen
        // until the section is 1/3 scrolled past
        const startOffset = windowHeight / 2;
        const endOffset = height / 3;
        const progress = 1 - (top + startOffset) / (windowHeight - endOffset);

        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLogoStyle = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI + Math.PI / 4;
    const startScale = 3;
    const endScale = 0;
    const startRadius = 0;
    const endRadius = 400;

    // Animate based on scroll progress
    const easedProgress = Math.sin((scrollProgress * Math.PI) / 2); // Ease-out curve

    const scale = startScale - easedProgress * (startScale - endScale);
    const radius = startRadius + easedProgress * (endRadius - startRadius);
    const opacity = Math.sin(scrollProgress * Math.PI); // Fade in and out

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return {
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
      opacity: opacity,
      zIndex: 10 - index,
    };
  };

  const getCenterLogoStyle = () => {
    const scale = scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 : 0;
    const opacity = scale;
    return {
      transform: `scale(${scale})`,
      opacity: opacity,
      zIndex: 20,
    };
  };

  return (
    <section ref={ref} className="bg-white py-32 relative h-[250vh] overflow-hidden">
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
                        className="absolute w-24 h-24 bg-white/50 backdrop-blur-sm border border-gray-200/50 p-4 rounded-2xl shadow-lg flex items-center justify-center transition-opacity duration-300"
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
