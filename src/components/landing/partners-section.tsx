"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const partnerIds = [
  'partner-pendle',
  'partner-symbiotic',
  'partner-aave',
  'partner-etherfi',
  'partner-eigenlayer',
  'partner-uniswap',
  'partner-arbitrum',
  'partner-coinbase',
];

const partners = partnerIds
  .map(id => PlaceHolderImages.find(p => p.id === id))
  .filter((p): p is ImagePlaceholder => Boolean(p));

// Duplicate partners for a seamless scroll
const scrollingPartners = [...partners, ...partners];

export function PartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase mb-8">
            Trusted by the best
        </h2>
        <div className="relative overflow-hidden ticker-mask">
            <div className="flex animate-marquee-slow">
                {scrollingPartners.map((partner, index) => partner && (
                    <div key={`${partner.id}-${index}`} className="flex-shrink-0 w-36 mx-6 flex items-center justify-center">
                        <Image
                            src={partner.imageUrl}
                            alt={partner.description}
                            data-ai-hint={partner.imageHint}
                            width={100}
                            height={30}
                            className="object-contain h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
