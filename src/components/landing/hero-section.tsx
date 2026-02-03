"use client";

import { Navbar } from './navbar';

export function HeroSection() {
  return (
    <div className="relative h-screen bg-white overflow-hidden">
      <video
        src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/kelp_Precise_Proteus.webm"
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
            <a href="#simulator" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 font-medium text-sm transition animate-glint">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
