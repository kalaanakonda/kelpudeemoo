"use client";

import { useState, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";

const navHierarchy = [
  {
    title: "Assets",
    items: [
      { name: "KUSD", href: "#" },
      { name: "rsETH", href: "#" }
    ]
  },
  {
    title: "Vaults",
    items: [
      { name: "Always Gain", href: "#" },
      { name: "High Gain", href: "#" },
      { name: "Stable Gain", href: "#" }
    ]
  },
  {
    title: "Enterprise Solutions",
    items: [
      { name: "Borrow instant credit", href: "#" }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "DeFi Alerts", href: "#" }
    ]
  }
];

const NavMenu = ({ isMobile = false }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <Accordion type="multiple" className="w-full">
        {navHierarchy.map((navItem, index) => (
          <AccordionItem key={index} value={`item-${index}`} className={index === navHierarchy.length - 1 ? 'border-b-0' : ''}>
            <AccordionTrigger className="font-medium hover:no-underline py-3">
              {navItem.title}
            </AccordionTrigger>
            <AccordionContent className="pl-4 pb-0">
              <ul className="flex flex-col gap-1">
                {navItem.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.href} className="block py-2 text-gray-600 hover:text-black">{item.name}</a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setMenuOpen(true);
    setActiveTitle(title);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setMenuOpen(false);
      setActiveTitle(null);
    }, 200);
  };

  const activeContent = navHierarchy.find(item => item.title === activeTitle);

  return (
    <div onMouseLeave={handleMouseLeave} className="hidden md:flex space-x-1 items-center">
      {navHierarchy.map((navItem) => (
        <Button
          key={navItem.title}
          variant="ghost"
          className="text-gray-600 text-xs font-normal cursor-pointer hover:text-black transition px-3 py-2 outline-none h-auto hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          onMouseEnter={() => handleMouseEnter(navItem.title)}
        >
          {navItem.title}
        </Button>
      ))}
      
      <div
        onMouseEnter={() => { if (timerRef.current) clearTimeout(timerRef.current) }}
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-auto bg-white text-black rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ease-in-out",
          isMenuOpen && activeTitle ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        )}
      >
        {activeContent && (
          <div key={activeContent.title} className="p-6 w-[480px] animate-fade-in duration-300">
            <h3 className="text-sm font-medium text-gray-500 mb-3">{activeContent.title}</h3>
            <Separator className="mb-4" />
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {activeContent.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={item.href} className="flex items-center justify-between py-1 text-sm text-gray-700 hover:text-black group">
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center text-black relative">
        <Link href="/" className="flex items-center gap-2 text-xl font-normal tracking-tight">
          <Image src="https://raw.githubusercontent.com/kalaanakonda/videosyogi/950a3eeee6091494eb4f769e53b83e1425ab84f9/Frame%202147223315.svg" alt="Kelp logo" width={61} height={14} />
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavMenu />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#simulator" className="bg-black/10 hover:bg-black/20 text-black px-4 py-1.5 text-xs font-medium transition flex items-center gap-2 animate-glint rounded-md">
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
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white text-black p-4 flex flex-col gap-1 text-sm rounded-md shadow-lg border border-gray-100">
          <NavMenu isMobile={true} />
          <a href="#simulator" onClick={() => setIsOpen(false)} className="bg-primary hover:bg-primary/90 text-primary-foreground text-center w-full py-2.5 mt-2 font-medium animate-glint rounded-md">
            Learn more
          </a>
        </div>
      )}
    </nav>
  );
};
