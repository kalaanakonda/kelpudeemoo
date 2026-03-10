"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';
import Script from 'next/script';

const savingsData = [
  {
    name: 'KUSD',
    apy: 12.0,
    isPrimary: true,
  },
  {
    name: 'USDe',
    apy: 11.1,
    icon: 'S',
    isPrimary: false,
  },
  {
    name: 'USDY',
    apy: 3.5,
    icon: 'Y',
    isPrimary: false,
  },
  {
    name: 'Fintech',
    apy: 3.6,
    icon: 'F',
    isPrimary: false,
  },
  {
    name: 'Banks',
    apy: 0.5,
    icon: 'B',
    isPrimary: false,
  },
];

const MAX_APY = 12.0;

export function KusdSection() {
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
      { threshold: 0.2 }
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
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
            <h2 className="text-4xl md:text-5xl font-normal font-heading leading-none tracking-tight mb-4 text-black">
              KUSD: The Stablecoin for the Instant Economy
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
              Earn from short term receivables across trade and cross border payments.
            </p>
            <div className="relative h-[400px] w-full">
              <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.68/build/spline-viewer.js"></Script>
              {/* @ts-ignore - spline-viewer is a custom element defined in the script above */}
              <spline-viewer url="https://prod.spline.design/vCXQMKAfR9eHElUx/scene.splinecode" className="w-full h-full"></spline-viewer>
            </div>
          </div>

          <div className={cn("space-y-3 opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '0.4s' }}>
            {savingsData.map((item) => (
              <div
                key={item.name}
                className={cn(
                  "bg-gray-50 p-4 flex items-center gap-4 border border-gray-200 rounded-md",
                  { "border-primary/50 bg-primary/5 animate-glint-primary": item.isPrimary }
                )}
              >
                <div className="flex items-center gap-4 w-2/5 flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center text-sm font-medium text-slate-800 bg-white border border-gray-200 rounded-sm flex-shrink-0">
                    {item.isPrimary ? (
                      <Image src="https://raw.githubusercontent.com/kalaanakonda/videosyogi/950a3eeee6091494eb4f769e53b83e1425ab84f9/Frame%202147223315.svg" alt="KUSD logo" width={20} height={20} />
                    ) : (
                      <span className="font-heading font-normal">{item.icon}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-base text-black">{item.name}</p>
                  </div>
                </div>
                <div className="w-2/5">
                  <Progress
                    value={(item.apy / MAX_APY) * 100}
                    className={cn(
                      "h-1.5 bg-gray-200",
                      item.isPrimary ? "[&>div]:bg-primary" : "[&>div]:bg-gray-400"
                    )} />
                </div>
                <div className="w-1/5 text-right">
                  <p className={cn(
                      "text-lg font-normal font-heading whitespace-nowrap",
                      item.isPrimary ? "text-primary" : "text-black"
                    )}
                  >
                    {item.apy.toFixed(1)}% APY
                  </p>
                </div>
              </div>
            ))}
             <div className="text-xs text-slate-500 pt-4 space-y-1 font-light">
                <p><span className="font-semibold text-slate-600">USDe:</span> Based on funding rates.</p>
                <p><span className="font-semibold text-slate-600">USDY:</span> Based on US Treasury Bills.</p>
                <p><span className="font-semibold text-slate-600">Fintech:</span> Based on money markets.</p>
                <p><span className="font-semibold text-slate-600">Banks:</span> Based on savings accounts.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}