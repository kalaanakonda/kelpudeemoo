"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    title: 'Pegged to USD',
    description: 'KUSD maintains a 1:1 peg with the US Dollar.',
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: 'Over-collateralized',
    description: 'Backed by a diversified basket of crypto assets.',
  },
  {
    icon: <BarChart className="w-5 h-5 text-primary" />,
    title: 'Yield Bearing',
    description: 'Earn native yield just by holding KUSD.',
  },
];

export function KusdSection() {
  return (
    <div className="rounded-lg bg-card text-card-foreground overflow-hidden h-screen">
        <div className="relative h-full w-full">
            <video
                src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/aaaaaaa.webm"
                playsInline
                muted
                autoPlay
                preload="metadata"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between text-center p-6 py-24">
                <div className="max-w-6xl mx-auto pt-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight mb-4 text-black">
                            KUSD: The Yield-Bearing Stablecoin
                        </h2>
                        <p className="text-black text-sm max-w-md mx-auto leading-relaxed font-light">
                            A decentralized, over-collateralized stablecoin designed for the instant economy.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                >
                                    <div className="bg-white p-6 text-center flex flex-col justify-center items-center rounded-md border h-full">
                                        <div className="p-2 bg-primary/10 mb-3 rounded-md">
                                            {feature.icon}
                                        </div>
                                        <h3 className="font-heading text-base font-normal mb-1 text-black">{feature.title}</h3>
                                        <p className="text-xs text-slate-500">{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
