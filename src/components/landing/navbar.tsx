"use client";

import { useState } from 'react';
import { Anchor, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center text-[#075A5A]">
        <Link href="/" className="flex items-center gap-2 text-xl font-normal tracking-tight">
          <div className="w-6 h-6 bg-[#075A5A] flex items-center justify-center text-white">
            <Anchor className="w-4 h-4 fill-current" />
          </div>
          <span className="font-heading">Kelp</span>
        </Link>

        <div className="hidden md:flex space-x-6 text-xs font-normal items-center text-gray-700">
          <a href="#" className="hover:text-[#075A5A] transition">Governance</a>
          <a href="#" className="hover:text-[#075A5A] transition">Blogs</a>
          <a href="#" className="hover:text-[#075A5A] transition">Ecosystem</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#075A5A] transition">
            More <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#simulator" className="bg-[#075A5A] hover:bg-[#075A5A]/90 text-white px-4 py-1.5 text-xs font-medium transition flex items-center gap-2">
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
          <a href="#simulator" onClick={() => setIsOpen(false)} className="bg-black text-white text-center w-full py-2 mt-2 font-medium">Learn more</a>
        </div>
      )}
    </nav>
  );
};
