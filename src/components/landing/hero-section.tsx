"use client";

import { Navbar } from './navbar';
import Image from 'next/image';

const partnerLogos = [
    { name: 'Alt Layer', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/alt_layer_1x.webp' },
    { name: 'Astherus', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/astherus_1x.webp' },
    { name: 'Autolayer', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/autolayer_1x.webp' },
    { name: 'Bankless Venture', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/bankless_venture_1x.webp' },
    { name: 'Bedrock', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/bedrock_1x.webp' },
    { name: 'Brevis', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/brevis_1x.webp' },
    { name: 'DACM', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/dacm_1x.webp' },
    { name: 'Draper Dragon', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/draper_dragon_1x.webp' },
    { name: 'Electron', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/electron_1x.webp' },
    { name: 'Eoracle', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/eoracle_1x.webp' },
    { name: 'Hypersphere', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/hypersphere_1x.webp' },
    { name: 'Kalypso', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/kalypso_1x.webp' },
    { name: 'KGen', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/kgen_1x.webp' },
    { name: 'Levitate', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/levitate_1x.webp' },
    { name: 'Lista', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/lista_1x.webp' },
    { name: 'Lorenzo', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/lorenzo_1x.webp' },
    { name: 'Mira', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/mira_1x.webp' },
    { name: 'Mishti', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/mishti_1x.webp' },
    { name: 'Primus', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/primus_1x.webp' },
    { name: 'Rectangle 6598', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/rectangle_6598_1x.webp' },
    { name: 'Rectangle 6599', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/rectangle_6599_1x.webp' },
    { name: 'Router', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/router_1x.webp' },
    { name: 'Solv', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/solv_1x.webp' },
    { name: 'Stakeease', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/stakeease_1x.webp' },
    { name: 'Stakestone', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/stakestone_1x.webp' },
    { name: 'Yieldnest', src: 'https://raw.githubusercontent.com/kalaanakonda/Logos-new/main/yieldnest_1x.webp' }
];

const ScrollingLogos = () => (
    <div className="flex-shrink-0 flex items-center justify-center whitespace-nowrap">
        {partnerLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-4">
                <div className="bg-black/5 backdrop-blur-sm rounded-full flex items-center justify-center px-4 py-2 h-10">
                    <Image
                        src={logo.src}
                        alt={logo.name}
                        width={80}
                        height={20}
                        className="object-contain h-5 w-auto"
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
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center bottom' }}
      >
        <source src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/new%20hero%201.webm" type="video/webm" />
      </video>
      
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
              Restake now
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 py-6 z-20 animate-slide-in-up"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap flex">
            <ScrollingLogos />
            <ScrollingLogos />
          </div>
        </div>
      </div>
    </div>
  );
};
