"use client";

import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center text-black">
        <Link href="/" className="flex items-center gap-2 text-xl font-normal tracking-tight">
          <Image src="https://cryptoast.fr/wp-content/uploads/2024/02/kelp-logo.png" alt="Kelp logo" width={61} height={14} />
        </Link>

        <div className="hidden md:flex space-x-6 text-xs font-normal items-center text-gray-700">
          <a href="#" className="hover:text-black transition">Governance</a>
          <a href="#" className="hover:text-black transition">Blogs</a>
          <a href="#" className="hover:text-black transition">Ecosystem</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
            More <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#simulator" className="bg-black/5 hover:bg-black/10 text-black border border-black/20 px-4 py-1.5 text-xs font-medium transition flex items-center gap-2 animate-glint">
            Learn more
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white text-black border border-black/10 p-4 shadow-xl flex flex-col gap-3 text-sm">
          <a href="#" className="font-medium hover:text-gray-700">Governance</a>
          <a href="#" className="font-medium hover:text-gray-700">Blogs</a>
          <a href="#" className="font-medium hover:text-gray-700">Ecosystem</a>
          <a href="#" className="font-medium hover:text-gray-700">More</a>
          <a href="#simulator" onClick={() => setIsOpen(false)} className="bg-black text-white text-center w-full py-2 mt-2 font-medium animate-glint">Learn more</a>
        </div>
      )}
    </nav>
  );
};
