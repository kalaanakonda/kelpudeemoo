"use client";

import { BarChart3, Users, Zap } from 'lucide-react';
import { AnimatedCounter } from './animated-counter';

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-5xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={1.46} delay={300} prefix="$" suffix="B" decimals={2} />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-1">Total Value Locked</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-5xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={300} delay={400} suffix="K+" decimals={0} />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-1">Total Restakers</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Zap className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-5xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={2.5} delay={500} suffix="%" decimals={1} />
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-1">Current APR</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
