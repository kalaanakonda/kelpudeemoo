"use client";

import { Navbar } from './navbar';
import Image from 'next/image';

const partnerLogos = [
    { name: 'Aave', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/aave.png' },
    { name: 'Aerodrome', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/aerodrome.png' },
    { name: 'Arbitrum', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/arbitrum.png' },
    { name: 'Balancer', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/balancer.png' },
    { name: 'Base', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/base.png' },
    { name: 'Compound', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/compound.png' },
    { name: 'EigenLayer', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/eigenlayer.png' },
    { name: 'Euler', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/euler.png' },
    { name: 'Fluid', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/fluid.png' },
    { name: 'Frax', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/frax.png' },
    { name: 'Gearbox', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/gearbox.png' },
    { name: 'Ionic', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/ionic.png' },
    { name: 'Linea', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/linea.png' },
    { name: 'Lido', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/lido.png' },
    { name: 'Morpho', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/morpho.png' },
    { name: 'Optimism', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/optimism.png' },
    { name: 'Pendle', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/pendle.png' },
    { name: 'Puffer', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/puffer.png' },
    { name: 'Redstone', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/redstone.png' },
    { name: 'Renzo', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/renzo.png' },
    { name: 'Spark', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/spark.png' },
    { name: 'Sushi', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/sushi.png' },
    { name: 'Symbiotic', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/symbiotic.png' },
    { name: 'Uniswap', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/uniswap.png' },
    { name: 'Zircuit', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/zircuit.png' }
];

const ScrollingLogos = () => (
    <div className="flex-shrink-0 flex items-center justify-center whitespace-nowrap">
        {partnerLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-4">
                <div className="bg-black/5 backdrop-blur-sm rounded-full flex items-center justify-center px-5 py-2.5 h-12">
                    <Image
                        src={logo.src}
                        alt={logo.name}
                        width={80}
                        height={24}
                        className="object-contain h-6 w-auto"
                    />
                </div>
            </div>
        ))}
    </div>
);


export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-card text-card-foreground">
      <video
        src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/new%20hero%201.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center bottom' }}
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
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap">
            <ScrollingLogos />
          </div>
          <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
            <ScrollingLogos />
          </div>
        </div>
      </div>
    </div>
  );
};
