"use client";

import { Navbar } from './navbar';

const partnerNames = [
    'Arbitrum', 'Base', 'Balancer', 'Uniswap', 'Aave', 'Compound', 'Morpho', 'Euler',
    'Fluid', 'Cian', 'Pendle', 'Optimism', 'Unichain', 'Aerodrome', 'Spark', 'August',
    'Canopy', 'Linea', 'TAC'
];


// Duplicate partners for a seamless scroll
const scrollingPartners = [...partnerNames, ...partnerNames];


export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-card text-card-foreground">
      <video
        src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/short%20vid.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <Navbar />

      <div className="absolute inset-0 p-6 flex justify-center text-center">
        <div className="max-w-2xl relative z-10 flex flex-col items-center pt-24">
          <h1 
            className="text-4xl md:text-5xl font-normal text-black tracking-tight leading-tight mb-4 font-heading animate-slide-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            Finance for the Instant Economy
          </h1>
          
          <p 
            className="text-slate-600 max-w-lg text-sm mb-6 leading-relaxed font-light animate-slide-in-up" 
            style={{ animationDelay: '0.8s' }}
          >
            At Kelp, we’re the gateway to on-demand earning mechanisms across crypto and
            real-world markets for a $250T+ economy.
          </p>

          <div 
            className="flex items-center gap-4 animate-slide-in-up" 
            style={{ animationDelay: '1.2s' }}
          >
            <a href="#simulator" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 font-medium text-sm transition animate-glint rounded-md">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-6 z-20">
        <div className="relative overflow-hidden">
            <div className="flex animate-marquee-slow">
                {scrollingPartners.map((name, index) => (
                    <div key={`${name}-${index}`} className="flex-shrink-0 mx-4">
                        <div className="bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center px-5 py-2.5">
                            <span className="text-black font-medium text-sm opacity-80 tracking-wide">{name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
