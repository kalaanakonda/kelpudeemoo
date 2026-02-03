"use client";

import { useState, useEffect } from 'react';
import { Navbar } from './navbar';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedTickerHeading } from './animated-ticker-heading';

const headings = [
  "Finance for the Instant Economy",
  "The Future of Liquid Restaking",
  "Unlocking On-Demand Earnings",
];

export function HeroSection() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadingIndex(prevIndex => (prevIndex + 1) % headings.length);
    }, 5000); // Change heading every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <div className="relative h-screen bg-black">
      {heroBg ? (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          data-ai-hint={heroBg.imageHint}
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <Navbar />

      <div className="absolute inset-0 p-6 flex items-center justify-center text-center">
        <div className="max-w-2xl relative z-10 flex flex-col items-center">
          <AnimatedTickerHeading 
            key={currentHeadingIndex}
            text={headings[currentHeadingIndex]}
            className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight mb-4 font-heading"
          />
          
          <p className="text-slate-400 max-w-lg text-sm mb-6 leading-relaxed font-light">
            At Kelp, we’re the gateway to on-demand earning mechanisms across crypto and
            real-world markets for a $250T+ economy.
          </p>

          <div className="flex items-center gap-4">
            <a href="#simulator" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 font-medium text-sm transition">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
