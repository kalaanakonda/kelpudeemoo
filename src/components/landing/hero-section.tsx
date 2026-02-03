"use client";

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Navbar } from './navbar';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen bg-black"> {/* This div acts as a spacer to prevent content jump */}
      <div className={cn(
        "w-full transition-all duration-300 ease-in-out",
        scrolled ? "fixed top-0 z-30 p-2" : "absolute inset-0 p-2 md:p-3 pb-0"
      )}>
        <div className={cn(
          "relative rounded-md overflow-hidden group transition-all duration-300 ease-in-out border",
          scrolled ? "h-[88px] border-white" : "h-full border-transparent"
        )}>
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
          <div className={cn(
            "absolute inset-0 bg-black/60 transition-colors",
            scrolled && "bg-black/70"
          )}></div>
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent",
            scrolled && "hidden"
          )}></div>

          <div className={cn(scrolled && '[&>nav>div]:bg-transparent [&>nav>div]:border-none [&>nav>div]:backdrop-blur-none')}>
            <Navbar />
          </div>

          <div className={cn(
            "absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8 transition-opacity duration-300",
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          )}>
            <div className="max-w-2xl relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full text-[10px] font-normal uppercase tracking-wider">
                  Liquid Restaking
                </span>
                <p className="text-slate-400 text-xs font-normal flex items-center gap-1.5">
                   <Globe className="w-3 h-3" /> Live on 10+ chains
                </p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-normal text-white tracking-tight leading-[0.95] mb-4 font-heading">
                Boost your <br/>
                <span className="text-slate-400">rewards on ETH</span>
              </h1>
              
              <p className="text-slate-400 max-w-sm text-sm mb-6 leading-relaxed font-light">
                Battle-tested, institutional grade liquid restaking offering high rewards.
              </p>

              <div className="flex items-center gap-4">
                <a href="#simulator" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-lg font-medium text-sm transition">
                  Restake now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
