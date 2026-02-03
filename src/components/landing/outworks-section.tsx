import { AuditViz, UtilityViz, LiquidityTunnelViz, RestakingViz } from './visualizations';

export function OutworksSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
            ETH works, <span className="text-slate-400">rsETH outworks.</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
            Unlock the full potential of your Ethereum. By restaking with Kelp, you maintain liquidity while earning rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group shadow-sm">
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">Audited & Secure</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 Multiple audits to thoroughly evaluate the protocol's security & functionality.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <AuditViz />
             </div>
          </div>

          <div className="bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group shadow-sm">
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">Maximum Utility</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 rsETH is available on multiple DeFi protocols, DEXs, CEXs, & wallets.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <UtilityViz />
             </div>
          </div>

          <div className="bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group shadow-sm">
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">Deep Liquidity</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 $300M+ across lending protocols, optimisers, and on-chain liquidity pools.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <LiquidityTunnelViz />
             </div>
          </div>

          <div className="bg-white border border-gray-200 p-10 h-[420px] flex flex-col justify-between hover:border-gray-300 transition-colors duration-300 relative overflow-hidden group shadow-sm">
             <div className="relative z-10">
               <h3 className="text-2xl font-normal font-heading text-black mb-2">One-click Restaking</h3>
               <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                 Kelp accepts deposits from major LSTs & ETH in a single transaction.
               </p>
             </div>
             <div className="flex-1 w-full relative mt-6">
               <RestakingViz />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
