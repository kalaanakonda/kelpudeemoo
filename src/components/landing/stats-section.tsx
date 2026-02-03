"use client";

import { BarChart3, Users, Zap } from 'lucide-react';
import { AnimatedCounter } from './animated-counter';

export function StatsSection() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
           <div className="flex-1">
             <div className="flex items-baseline gap-2 mb-1">
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">Total Value Locked</p>
                <div className="h-[1px] bg-gray-100 flex-1"></div>
             </div>
             <div className="text-5xl md:text-7xl font-semibold font-heading tracking-tighter text-black flex items-center gap-2">
               <AnimatedCounter end={1.46} delay={300} prefix="$" suffix="B" decimals={2} />
               <BarChart3 className="w-6 h-6 text-gray-300 stroke-[1.5]" />
             </div>
           </div>
           
           <div className="hidden md:block w-[1px] h-20 bg-gray-100"></div>

           <div className="flex-1">
             <div className="flex items-baseline gap-2 mb-1">
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">Total Restakers</p>
                <div className="h-[1px] bg-gray-100 flex-1"></div>
             </div>
             <div className="text-5xl md:text-7xl font-semibold font-heading tracking-tighter text-black flex items-center gap-2">
               <AnimatedCounter end={300} delay={400} suffix="K+" decimals={0} />
               <Users className="w-6 h-6 text-gray-300 stroke-[1.5]" />
             </div>
           </div>

           <div className="hidden md:block w-[1px] h-20 bg-gray-100"></div>

           <div className="flex-1 md:text-right">
             <div className="flex items-baseline gap-2 mb-1 justify-start md:justify-end">
                <div className="hidden md:block h-[1px] bg-gray-100 flex-1"></div>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">Current APR</p>
             </div>
             <div className="text-5xl md:text-7xl font-semibold font-heading tracking-tighter text-black flex items-center justify-start md:justify-end gap-2">
               <Zap className="w-6 h-6 text-gray-300 stroke-[1.5]" />
               <AnimatedCounter end={2.5} delay={500} suffix="%" decimals={1} />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
