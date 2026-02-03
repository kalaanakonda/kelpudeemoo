import { Globe } from 'lucide-react';
import { Navbar } from './navbar';

export function HeroSection() {
  return (
    <div className="p-2 md:p-3 pb-0 bg-black">
      <div className="relative h-screen rounded-md overflow-hidden group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover grayscale"
        >
          <source 
            src="https://github.com/kalaanakonda/videosyogi/raw/refs/heads/main/kling_20260202_Image_to_Video_the_scene__5653_0.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <Navbar />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded-full text-[10px] font-normal uppercase tracking-wider">
                Liquid Restaking
              </span>
              <p className="text-slate-400 text-xs font-normal flex items-center gap-1.5">
                 <Globe className="w-3 h-3" /> Live on 10+ chains
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-normal text-white tracking-tight leading-[0.95] mb-4">
              Boost your <br/>
              <span className="text-slate-400">rewards on ETH</span>
            </h1>
            
            <p className="text-slate-400 max-w-sm text-sm mb-6 leading-relaxed font-light">
              Battle-tested, institutional grade liquid restaking offering high rewards.
            </p>

            <div className="flex items-center gap-4">
              <a href="#simulator" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-sm font-medium text-sm transition">
                Restake now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
