"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight, DollarSign } from 'lucide-react';
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

export function EcosystemSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
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

  const cardStyle = (depth: number) => ({
    transform: `translate(${mousePosition.x * depth}px, ${mousePosition.y * depth}px)`,
    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  });

  return (
    <section ref={ref} className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase mb-4">
            Powering the rsETH Ecosystem
          </h2>
          <p className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight max-w-2xl mx-auto">
            A borderless financial network for on-demand earning.
          </p>
        </div>
      </div>
      
      {/* Floating cards */}
      <div className="absolute inset-0 z-0 w-full h-full">
          {/* Card 1: Dollar Sign */}
          <div className="absolute top-[15%] left-[20%] w-28 h-28 bg-purple-100/50 border border-purple-200/80 rounded-3xl shadow-lg flex items-center justify-center" style={cardStyle(25)}>
            <DollarSign className="w-12 h-12 text-purple-400" />
          </div>

          {/* Card 2: Uniswap */}
          <div className="absolute top-[20%] right-[15%] w-36 h-24 bg-white border rounded-2xl shadow-lg p-4 flex items-center justify-center" style={cardStyle(-30)}>
             {ecosystemPartners[5] && <Image src={ecosystemPartners[5].imageUrl} alt={ecosystemPartners[5].description} width={80} height={80} className="object-contain" />}
          </div>

           {/* Card 3: Eigenlayer */}
          <div className="absolute bottom-[20%] left-[10%] w-40 h-28 bg-white border rounded-3xl shadow-lg p-4 flex items-center justify-center" style={cardStyle(40)}>
            {ecosystemPartners[4] && <Image src={ecosystemPartners[4].imageUrl} alt={ecosystemPartners[4].description} width={100} height={60} className="object-contain"/>}
          </div>

          {/* Card 4: Earn Interest */}
           <div className="absolute bottom-[25%] right-[20%] w-40 h-32 bg-gray-50 border rounded-2xl shadow-lg p-4 flex flex-col justify-between text-left" style={cardStyle(-20)}>
            <div>
              <p className="text-xs text-slate-600">Earn interest up to</p>
              <p className="text-lg font-heading text-black">4% APY</p>
            </div>
            <div className="self-end w-8 h-8 bg-lime-300 flex items-center justify-center rounded-md">
              <ArrowUpRight className="w-5 h-5 text-lime-800" />
            </div>
          </div>
          
          {/* Card 5: Aave */}
          <div className="absolute top-[40%] left-[30%] w-24 h-24 bg-white border rounded-full shadow-lg p-4 flex items-center justify-center" style={cardStyle(-15)}>
             {ecosystemPartners[2] && <Image src={ecosystemPartners[2].imageUrl} alt={ecosystemPartners[2].description} width={60} height={60} className="object-contain" />}
          </div>

           {/* Card 6: Balance */}
           <div className="absolute top-[55%] right-[30%] w-48 h-28 bg-slate-900 text-white border border-slate-700 rounded-3xl shadow-xl p-4 flex flex-col justify-between text-left" style={cardStyle(35)}>
            <div className="flex items-center gap-2">
              <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" alt="USDC" width={20} height={20}/>
              <span className="text-xs font-medium text-slate-400">USDC</span>
            </div>
            <p className="text-3xl font-heading tracking-tight">$2,180</p>
          </div>
          
           {/* Card 7: Pendle */}
           <div className="absolute top-[70%] left-[45%] w-32 h-20 bg-white border rounded-xl shadow-lg p-4 flex items-center justify-center" style={cardStyle(20)}>
             {ecosystemPartners[0] && <Image src={ecosystemPartners[0].imageUrl} alt={ecosystemPartners[0].description} width={80} height={40} className="object-contain"/>}
           </div>

           {/* Card 8: Arbitrum */}
           <div className="absolute top-[5%] right-[40%] w-24 h-24 bg-blue-500 flex items-center justify-center p-4 border border-blue-400 rounded-3xl shadow-lg" style={cardStyle(-45)}>
              {ecosystemPartners[6] && <Image src={ecosystemPartners[6].imageUrl} alt={ecosystemPartners[6].description} width={60} height={60} className="object-contain invert brightness-0"/>}
           </div>
      </div>
    </section>
  );
}
