"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Label } from '@/components/ui/label';

const vaults = [
  {
    id: 'stable-gain',
    name: 'Stable Gain Vault',
    description: 'Put idle stables to work - deposit USDT / USDC, mint sbUSD, earn up to ~20% rewards',
    tvl: '$7.7M',
    apr: '11.30%',
    iconUrl: 'https://kerneldao.com/_next/static/media/sbUsd.3fc46369.svg',
  },
  {
    id: 'high-gain',
    name: 'High Gain Vault',
    description: 'Highest rewards on ETH - deposit rsETH / ETH / LSTs, mint hgETH, earn rewards via blue-chip strategies',
    tvl: '$38.3M',
    apr: '8.51%',
    iconUrl: 'https://kerneldao.com/_next/static/media/hgEthImg.9d0d033c.png',
  },
  {
    id: 'airdrop-gain',
    name: 'Airdrop Gain Vault',
    description: 'Institutional strategies - deposit rsETH / ETH / LSTs, mint agETH, access exclusive rewards',
    tvl: '$28.7M',
    apr: '8.33%',
    iconUrl: 'https://kerneldao.com/_next/static/media/agEthImg.97c66245.png',
  }
];

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
          {vaults.map((vault, index) => (
              <div
                key={vault.id}
                className={cn("bg-gray-50 p-10 flex flex-col justify-between opacity-0 rounded-md", inView && "animate-slide-in-up")}
                style={{ animationDelay: `${1.0 + index * 0.4}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading text-2xl font-normal">{vault.name}</h3>
                    <Image src={vault.iconUrl} alt={vault.name} width={40} height={40} />
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    {vault.description}
                  </p>
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
                <Button variant="outline" className="w-full rounded-md mt-6">
                  Deposit now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
