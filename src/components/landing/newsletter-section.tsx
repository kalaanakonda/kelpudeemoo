"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function NewsletterSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="bg-gray-50 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className={cn("opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-3xl font-normal font-heading text-black leading-tight tracking-tight mb-2">
            Stay updated with Kelp
          </h2>
          <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto">
            Join 300K+ users & unlock exclusive rewards!
          </p>
          <form className="flex max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Email address" 
              className="h-11 text-base flex-1 border-gray-200 bg-white focus:border-primary focus:ring-primary"
              aria-label="Email address"
            />
            <Button type="submit" className="h-11 px-6 ml-[-2px] text-sm">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
