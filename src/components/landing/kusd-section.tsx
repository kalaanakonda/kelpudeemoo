"use client";

import { DollarSign, BarChart, Shield } from 'lucide-react';
import React from 'react';

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
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between text-center p-6 pt-16">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-normal font-heading leading-none tracking-tight mb-4 text-black">
                            KUSD: The Yield-Bearing Stablecoin
                        </h2>
                        <p className="text-black text-sm max-w-md mx-auto leading-relaxed font-light">
                            A decentralized, over-collateralized stablecoin designed for the instant economy.
                        </p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto pb-12 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-start text-left gap-4 text-black"
                                >
                                    <div className="p-3 bg-white/20 border border-white/30 backdrop-blur-sm rounded-md">
                                      {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-base font-normal mb-1">{feature.title}</h3>
                                        <p className="text-xs text-slate-800">{feature.description}</p>
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
