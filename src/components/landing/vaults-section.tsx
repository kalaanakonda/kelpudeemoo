"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Label } from '@/components/ui/label';

const vaults = [
  {
    id: 'airdrop-gain',
    name: 'Always Gain',
    description: 'agETH - Steady, on-chain rewards through curated DeFi strategies.',
    tvl: '$28.7M',
    apr: '8.33%',
    iconUrl: '/eth-logo.svg',
    category: 'Ethereum',
    strategy: 'Low Risk',
    assets: ['agETH', 'WETH'],
    managedBy: 'Edge Capital',
    liveFor: '6 months',
    insured: false,
  },
  {
    id: 'high-gain',
    name: 'High Gain',
    description: 'hgETH - Maximum rewards through actively managed strategies.',
    tvl: '$38.3M',
    apr: '8.51%',
    iconUrl: '/eth-logo.svg',
    category: 'Ethereum',
    strategy: 'High Risk',
    assets: ['hgETH', 'WETH'],
    managedBy: 'Edge Capital',
    liveFor: '3 months',
    insured: true,
  },
  {
    id: 'stable-gain',
    name: 'Stable Gain',
    description: 'sbUSD - Earn rewards on idle stablecoins through curated DeFi strategies.',
    tvl: '$7.7M',
    apr: '11.30%',
    iconUrl: '/stablecoin-logo.svg',
    category: 'Stablecoin',
    strategy: 'Low Risk',
    assets: ['USDC', 'USDT'],
    managedBy: 'Edge Capital',
    liveFor: '9 months',
    insured: false,
  },
];

const assetIcons: { [key: string]: string } = {
    'agETH': 'https://kerneldao.com/_next/static/media/agEthImg.97c66245.png',
    'WETH': 'https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png',
    'hgETH': 'https://kerneldao.com/_next/static/media/hgEthImg.9d0d033c.png',
    'USDC': 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
    'USDT': 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
};

export function VaultsSection() {
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
      {
        threshold: 0.1,
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

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn("mb-16 text-center opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
            Maximize Your Yield with Vaults
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
            Deposit assets and earn passive income through our automated, optimized yield strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vaults.map((vault, index) => {
              return (
              <div
                key={vault.id}
                className={cn("bg-gray-50 p-6 flex flex-col justify-between opacity-0 rounded-md relative min-h-[530px]", inView && "animate-slide-in-up")}
                style={{ animationDelay: `${1.0 + index * 0.4}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <Image
                            src={vault.iconUrl}
                            alt={`${vault.name} icon`}
                            width={32}
                            height={32}
                        />
                        <div>
                            <div className="text-xs bg-white border border-gray-200 text-slate-600 font-medium px-2 py-0.5 rounded-full inline-block mb-1.5">
                                {vault.category}
                            </div>
                            <h3 className="font-heading text-xl font-normal">{vault.name}</h3>
                        </div>
                      </div>
                    {vault.insured && (
                      <div className="bg-white border border-gray-200 px-2 py-1 text-xs font-medium text-slate-600 flex items-center gap-1.5 whitespace-nowrap">
                          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                          Insured by Nexus Mutual
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                      <div className="bg-white p-3 border border-gray-200 rounded-md">
                        <Label className="text-xs text-slate-500">Strategy</Label>
                        <p className="text-sm font-medium text-black mt-1">{vault.strategy}</p>
                      </div>

                      <div className="bg-white p-3 border border-gray-200 rounded-md">
                          <Label className="text-xs text-slate-500">Assets accepted</Label>
                          <div className="flex items-center gap-2 mt-2">
                              {vault.assets.map(asset => (
                                  <div key={asset} className="flex items-center gap-2">
                                    <Image src={assetIcons[asset]} alt={asset} width={20} height={20} className="bg-white rounded-full"/>
                                    <span className="text-sm font-medium text-black">{asset}</span>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="flex justify-between items-center border-t border-b border-gray-100 py-4 text-center">
                          <div>
                              <Label className="text-xs text-slate-500">TVL</Label>
                              <div className="text-base font-normal font-heading mt-1 text-black">
                                  {vault.tvl}
                              </div>
                          </div>
                          <div>
                              <Label className="text-xs text-slate-500">APR</Label>
                              <div className="text-base font-normal font-heading mt-1 text-black">
                                  {vault.apr}
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                    <p className="text-xs text-slate-500">Managed by <span className="font-medium text-slate-700">{vault.managedBy}</span></p>
                    <p className="text-xs text-slate-400 mt-1">Live for {vault.liveFor}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
