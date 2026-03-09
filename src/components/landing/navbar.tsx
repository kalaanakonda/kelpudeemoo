"use client";

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const NavMenu = ({ isMobile = false }: { isMobile?: boolean }) => {
  const navItems = [
    {
      title: "Assets",
      items: ["KUSD", "rsETH"]
    },
    {
      title: "Vaults",
      items: ["Always Gain", "High Gain", "Stable Gain"]
    },
    {
      title: "Enterprise Solutions",
      items: ["Borrow instant credit"]
    },
    {
      title: "Tools",
      items: ["DeFi Alerts"]
    }
  ];

  if (isMobile) {
    return (
      <Accordion type="multiple" className="w-full">
        {navItems.map((navItem, index) => (
          <AccordionItem key={index} value={`item-${index}`} className={index === navItems.length - 1 ? 'border-b-0' : ''}>
            <AccordionTrigger className="font-medium hover:no-underline py-3">
              {navItem.title}
            </AccordionTrigger>
            <AccordionContent className="pl-4 pb-0">
              <ul className="flex flex-col gap-1">
                {navItem.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="block py-2 text-gray-600 hover:text-black">{item}</a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <div className="hidden md:flex space-x-1 text-xs font-normal items-center text-gray-600">
      {navItems.map((navItem, index) => (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-black transition px-3 py-2 outline-none h-auto text-xs font-normal hover:bg-black/5">
              {navItem.title}
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navItem.items.map((item, itemIndex) => (
              <DropdownMenuItem key={itemIndex}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center text-black">
        <Link href="/" className="flex items-center gap-2 text-xl font-normal tracking-tight">
          <Image src="https://raw.githubusercontent.com/kalaanakonda/videosyogi/950a3eeee6091494eb4f769e53b83e1425ab84f9/Frame%202147223315.svg" alt="Kelp logo" width={61} height={14} />
        </Link>

        <NavMenu />

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
