"use client";

import { BarChart3, Users, TrendingUp, Activity } from 'lucide-react';
import { AnimatedCounter } from './animated-counter';

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="flex items-center justify-center gap-4">
            <BarChart3 className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-4xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={1.46} delay={600} prefix="$" suffix="B" decimals={2} />
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-light mt-1">Assets Under Management</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Users className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-4xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={300} delay={800} suffix="K+" decimals={0} />
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-light mt-1">Total Users</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <TrendingUp className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-4xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={10.3} delay={1000} suffix="%" decimals={1} />
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-light mt-1">KUSD APY</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Activity className="w-8 h-8 text-primary/80 stroke-[1.5]" />
            <div>
              <div className="text-4xl font-normal font-heading tracking-tighter text-black">
                <AnimatedCounter end={4.5} delay={1200} suffix="%" decimals={1} />
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-light mt-1">rsETH APY</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
