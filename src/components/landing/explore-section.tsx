"use client";

import { ShieldCheck, Bug, Globe, Coins } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function ExploreSection() {
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
        threshold: 0.1,
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
    <section ref={ref} className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn("mb-8 opacity-0", inView && "animate-slide-in-up")}>
          <h2 className="text-2xl font-normal font-heading text-black leading-tight tracking-tight mb-2">
            Explore
          </h2>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <Globe className="w-4 h-4" /> Live on 10+ chains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 space-y-4 flex flex-col">
            <Card className={cn("bg-gray-100 border-gray-200 flex-1 opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '1.0s' }}>
              <CardHeader className="flex-row items-start gap-3 p-4">
                <div className="p-2 bg-primary/10 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <CardTitle className="text-sm font-normal font-heading">Audits</CardTitle>
                  <CardDescription className="text-xs">Secured by trusted auditors.</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-1 text-primary text-xs">
                    View Audits
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className={cn("bg-gray-100 border-gray-200 flex-1 opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '1.2s' }}>
              <CardHeader className="flex-row items-start gap-3 p-4">
                <div className="p-2 bg-primary/10 text-primary">
                  <Bug className="w-4 h-4" />
                </div>
                <div>
                  <CardTitle className="text-sm font-normal font-heading">Bug Bounty</CardTitle>
                  <CardDescription className="text-xs">Secure Kelp, earn up to $250K.</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-1 text-primary text-xs">
                    Submit a Bug
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className={cn("h-full border-gray-200 flex flex-col opacity-0", inView && "animate-slide-in-up")} style={{ animationDelay: '1.4s' }}>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base font-normal font-heading flex items-center gap-2">
                    <Coins className="w-4 h-4 text-primary" />
                    Restaking Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-4">
                      <div>
                          <Label htmlFor="eth-amount" className="text-xs text-slate-500">ETH Amount</Label>
                          <Input id="eth-amount" type="number" defaultValue={100} className="text-base h-10 p-3 font-normal font-heading"/>
                      </div>
                      <div className="flex justify-between items-center border-t border-b border-gray-100 py-4 text-center">
                          <div>
                              <Label className="text-xs text-slate-500">Current APY</Label>
                              <div className="text-base font-normal font-heading mt-1">
                                  2.6%
                              </div>
                          </div>
                          <div>
                              <Label className="text-xs text-slate-500">Monthly earnings</Label>
                              <div className="text-base font-normal font-heading mt-1">0.22 rsETH</div>
                          </div>
                          <div>
                              <Label className="text-xs text-slate-500">Yearly earnings</Label>
                              <div className="text-base font-normal font-heading mt-1">2.60 rsETH</div>
                          </div>
                      </div>
                  </div>
                </div>
                <Button className="w-full h-10 text-sm">
                  Restake now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
