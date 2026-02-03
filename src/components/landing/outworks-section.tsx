"use client";

import { AuditViz, UtilityViz, LiquidityTunnelViz, RestakingViz } from './visualizations';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function OutworksSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <section ref={ref} className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn("mb-16 text-center opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
            ETH works, <span className="text-slate-400">rsETH outworks.</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
            Unlock the full potential of your Ethereum. By restaking with Kelp, you maintain liquidity while earning rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={cn("bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '1.0s' }}>
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">Audited & Secure</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 Multiple audits to thoroughly evaluate the protocol's security & functionality.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <AuditViz />
             </div>
          </div>

          <div className={cn("bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '1.4s' }}>
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">Maximum Utility</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 rsETH is available on multiple DeFi protocols, DEXs, CEXs, & wallets.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <UtilityViz />
             </div>
          </div>

          <div className={cn("bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '1.8s' }}>
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">Deep Liquidity</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 $300M+ across lending protocols, optimisers, and on-chain liquidity pools.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <LiquidityTunnelViz />
             </div>
          </div>

          <div className={cn("bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '2.2s' }}>
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">One-click Restaking</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 Kelp accepts deposits from major LSTs & ETH in a single transaction.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <RestakingViz />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
