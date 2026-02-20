"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const backerIds = [
  'partner-aave',
  'partner-eigenlayer',
  'partner-pendle',
  'partner-uniswap',
  'partner-arbitrum',
  'partner-coinbase',
  'partner-balancer',
  'partner-symbiotic',
];

const initialBackers = backerIds
  .map(id => PlaceHolderImages.find(p => p.id === id))
  .filter((p): p is ImagePlaceholder => Boolean(p));

export function EarlyBackersSection() {
  const [inView, setInView] = useState(false);
  const [shuffledBackers, setShuffledBackers] = useState<ImagePlaceholder[]>([]);
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

  useEffect(() => {
    // Shuffle backers for random display order
    const shuffled = [...initialBackers].sort(() => 0.5 - Math.random());
    setShuffledBackers(shuffled);
  }, []);

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
            <h2 className="text-base font-normal font-body text-slate-500 tracking-wider uppercase mb-4">
                Our Early Backers
            </h2>
            <p className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight max-w-2xl mx-auto">
                Supported by the leading investors in Web3.
            </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
                {shuffledBackers.map((backer, index) => backer && (
                    <div
                        key={`${backer.id}-${index}`}
                        className={cn("opacity-0", inView && "animate-slide-in-up")}
                        style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                    >
                        <Image
                            src={backer.imageUrl}
                            alt={backer.description}
                            data-ai-hint={backer.imageHint}
                            width={120}
                            height={40}
                            className="object-contain h-10 w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
