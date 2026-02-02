"use client";

import { useState } from 'react';
import { Anchor, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-md px-4 py-2 flex justify-between items-center text-white">
        <Link href="/" className="flex items-center gap-2 text-xl font-medium tracking-tight">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-black">
            <Anchor className="w-4 h-4 fill-current" />
          </div>
          <span className="font-heading">Restake Oasis</span>
        </Link>

        <div className="hidden md:flex space-x-6 text-xs font-normal items-center text-gray-300">
          <a href="#" className="hover:text-white transition">Governance</a>
          <a href="#" className="hover:text-white transition">Blogs</a>
          <a href="#" className="hover:text-white transition">Ecosystem</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
            More <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#simulator" className="bg-white hover:bg-gray-200 text-black px-4 py-1.5 rounded-sm text-xs font-medium transition flex items-center gap-2">
            Restake now
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-black text-white border border-white/10 rounded-md p-4 shadow-xl flex flex-col gap-3 z-50 text-sm">
          <a href="#" className="font-medium hover:text-gray-300">Governance</a>
          <a href="#" className="font-medium hover:text-gray-300">Blogs</a>
          <a href="#" className="font-medium hover:text-gray-300">Ecosystem</a>
          <a href="#" className="font-medium hover:text-gray-300">More</a>
          <a href="#simulator" onClick={() => setIsOpen(false)} className="bg-white text-black text-center w-full py-2 rounded-sm mt-2 font-medium">Restake now</a>
        </div>
      )}
    </nav>
  );
};
