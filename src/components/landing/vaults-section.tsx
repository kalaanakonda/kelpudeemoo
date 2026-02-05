"use client";

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const vaults = [
  {
    id: 'vault-eth',
    name: 'ETH Vault',
    apy: '3-5%',
    iconId: 'partner-arbitrum',
  },
  {
    id: 'vault-usdc',
    name: 'USDC Vault',
    apy: '8-12%',
    iconId: 'partner-coinbase',
  },
  {
    id: 'vault-btc',
    name: 'BTC Vault',
    apy: '2-4%',
    iconId: 'rseth-logo',
  },
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
          {vaults.map((vault, index) => {
            const icon = PlaceHolderImages.find(p => p.id === vault.iconId);
            return (
              <div
                key={vault.id}
                className={cn("bg-gray-50 p-10 h-[420px] flex flex-col justify-between opacity-0 rounded-md", inView && "animate-slide-in-up")}
                style={{ animationDelay: `${1.0 + index * 0.4}s` }}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-2xl font-normal">{vault.name}</h3>
                      <p className="text-sm text-muted-foreground">Estimated APY: {vault.apy}</p>
                    </div>
                    {icon && <Image src={icon.imageUrl} alt={icon.description} data-ai-hint={icon.imageHint} width={32} height={32} />}
                  </div>
                  <p className="text-sm text-slate-500">
                      A simple and secure way to earn yield on your {vault.name.split(' ')[0]}.
                  </p>
                </div>
                <Button variant="outline" className="w-full rounded-md">
                  Deposit now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
