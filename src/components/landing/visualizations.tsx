import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Lock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const ArrowLeftRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 17.5V20l6-4-6-4v2.5H4v3h10zm-4-10.5V5L4 9l6 4v-2.5h10v-3H10z" />
    </svg>
);

const WalletIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 7.24a1 1 0 0 0-1-1.24H4.25a1 1 0 0 0-1 1.24l-1.5 8.25A1 1 0 0 0 2.75 18H21.25a1 1 0 0 0 .99-1.51l-1.5-8.25zM12 14.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        <path d="M4 6h16v-1a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1z" />
    </svg>
);

const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M2.5 17.5 9 11l4 4 8.5-8.5v4h2v-8h-8v2h4.5L13 13l-4-4-8 8L2.5 17.5z" />
    </svg>
);

const LandmarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M2 22h20v-2H2v2zM12 2l-9 4.5V10h18V6.5L12 2zM5 12v6h3v-6H5zm5 0v6h4v-6h-4zm7 0v6h3v-6h-3z" />
    </svg>
);

const CircleDollarSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1h1.5a1.5 1.5 0 0 0 0-3H10a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5V8a1 1 0 0 1 2 0v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-1.5a1.5 1.5 0 0 0 0 3H14a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5V16a1 1 0 0 1-1 1z" />
    </svg>
);


export const AuditViz = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gray-50">
    <div className="relative z-10 flex items-center justify-center">
       <div className="absolute w-24 h-24 bg-primary/10 animate-ping opacity-20"></div>
       <div className="absolute w-20 h-20 bg-primary/10 animate-pulse"></div>
       
       <div className="bg-white border border-gray-200 p-4 relative overflow-hidden">
          <Lock className="w-10 h-10 text-primary" strokeWidth={1.5} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary animate-scanner"></div>
       </div>
       
       <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 border-2 border-white">
          <ShieldCheck className="w-4 h-4" strokeWidth={2} />
       </div>
    </div>
  </div>
);

export const UtilityViz = () => {
  const rsEthLogo = PlaceHolderImages.find(p => p.id === 'rseth-logo');
  const icons = [
    <ArrowLeftRightIcon className="w-4 h-4 text-primary" />,
    <WalletIcon className="w-4 h-4 text-primary" />,
    <TrendingUpIcon className="w-4 h-4 text-primary" />,
    <LandmarkIcon className="w-4 h-4 text-primary" />,
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="absolute -bottom-[20%] -right-16 w-80 h-80 translate-y-12">
        {/* Outer Orbit Line */}
        <div className="absolute inset-0 animate-spin-slow origin-center border border-gray-200 rounded-full z-0" />
        
        {/* Outer Orbit Icons */}
        <div className="absolute inset-0 animate-spin-slow origin-center z-10">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="absolute w-10 h-10 bg-white border border-gray-200 flex items-center justify-center rounded-full z-10" style={{ top: '50%', left: '50%', transform: `rotate(${i * 45}deg) translate(140px) rotate(-${i * 45}deg)` }}>
                {React.cloneElement(icons[i % icons.length], { key: i })}
             </div>
           ))}
        </div>

        {/* Inner Orbit Line */}
        <div className="absolute top-10 left-10 right-10 bottom-10 animate-spin-reverse-slow origin-center border border-gray-200 rounded-full z-0" />
        
        {/* Inner Orbit Icons */}
        <div className="absolute top-10 left-10 right-10 bottom-10 animate-spin-reverse-slow origin-center z-10">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="absolute w-8 h-8 bg-white border border-gray-200 flex items-center justify-center rounded-full z-10" style={{ top: '50%', left: '50%', transform: `rotate(${i * 60}deg) translate(90px) rotate(-${i * 60}deg)` }}>
                {React.cloneElement(icons[(i + 1) % icons.length], { key: i })}
             </div>
           ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white border border-gray-200 flex items-center justify-center z-20 rounded-full">
           {rsEthLogo && <Image src={rsEthLogo.imageUrl} alt="rsETH" data-ai-hint={rsEthLogo.imageHint} width={48} height={48} className="object-contain" />}
        </div>
      </div>
    </div>
  )
};

export const LiquidityTunnelViz = () => {
  const logoIds = ['liquidity-aave', 'liquidity-eigenlayer', 'liquidity-pendle', 'partner-uniswap', 'partner-arbitrum', 'partner-coinbase', 'partner-balancer'];
  const logos = logoIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  const directions = [
    { tx: '0px', ty: '-300px' }, { tx: '210px', ty: '-210px' }, { tx: '300px', ty: '0px' }, { tx: '210px', ty: '210px' },
    { tx: '0px', ty: '300px' }, { tx: '-210px', ty: '210px' }, { tx: '-300px', ty: '0px' }, { tx: '-210px', ty: '-210px' },
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="relative w-full h-full flex items-center justify-center">
         {directions.map((dir, i) => {
            const logo = logos[i % logos.length];
            if (!logo) return null;
            return(
            <div key={`w1-${i}`} className="absolute w-10 h-10 bg-white border border-gray-100 animate-tunnel flex items-center justify-center z-10 rounded-full" style={{ '--tx': dir.tx, '--ty': dir.ty, animationDelay: '0s' }}>
               <Image src={logo.imageUrl} alt={logo.description} data-ai-hint={logo.imageHint} width={40} height={40} className="w-full h-full object-cover rounded-full" />
            </div>
         )})}

         {directions.map((dir, i) => {
            const logo = logos[(i + 1) % logos.length];
            if (!logo) return null;
            return(
            <div key={`w2-${i}`} className="absolute w-10 h-10 bg-white border border-gray-100 animate-tunnel flex items-center justify-center z-10 rounded-full" style={{ '--tx': dir.tx, '--ty': dir.ty, animationDelay: '-2s' }}>
               <Image src={logo.imageUrl} alt={logo.description} data-ai-hint={logo.imageHint} width={40} height={40} className="w-full h-full object-cover rounded-full" />
            </div>
         )})}
         
         <div className="absolute w-4 h-4 bg-primary/20 blur-xl z-0"></div>
      </div>
    </div>
  );
};

export const RestakingViz = () => {
  const rsEthLogo = PlaceHolderImages.find(p => p.id === 'rseth-logo');

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="relative flex flex-col items-center">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
            {[
              { bx: '-30px', by: '-60px', br: '-15deg', ex: '-50px', ey: '-100px', er: '-30deg', delay: '0s' },
              { bx: '-10px', by: '-70px', br: '-5deg', ex: '-15px', ey: '-120px', er: '-10deg', delay: '0.1s' },
              { bx: '10px', by: '-70px', br: '5deg', ex: '15px', ey: '-120px', er: '10deg', delay: '0.05s' },
              { bx: '30px', by: '-60px', br: '15deg', ex: '50px', ey: '-100px', er: '30deg', delay: '0.15s' },
              { bx: '0px', by: '-50px', br: '0deg', ex: '0px', ey: '-80px', er: '0deg', delay: '0.2s' },
            ].map((cfg, i) => (
               <div key={i} className="absolute w-8 h-8 animate-coin-burst" style={{ '--bx': cfg.bx, '--by': cfg.by, '--br': cfg.br, '--ex': cfg.ex, '--ey': cfg.ey, '--er': cfg.er, animationDelay: cfg.delay }}>
                  {rsEthLogo && <Image src={rsEthLogo.imageUrl} className="w-full h-full object-contain" alt="rsETH coin" data-ai-hint={rsEthLogo.imageHint} width={32} height={32} />}
               </div>
            ))}
         </div>

         <div className="w-36 h-12 border border-gray-200 bg-white flex items-center justify-center relative z-10 animate-btn-press-visual cursor-pointer">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Restake</span>
         </div>

         <div className="absolute top-1/2 left-1/2 animate-cursor-btn z-20 pointer-events-none">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="1">
               <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
         </div>
      </div>
    </div>
  )
};
