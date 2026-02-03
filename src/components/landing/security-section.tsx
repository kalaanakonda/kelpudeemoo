export function SecuritySection() {
  return (
    <section className="bg-gray-100 text-black py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-slate-500 text-xs font-medium tracking-wider uppercase mb-3 block">Audits & Security</span>
          <h2 className="text-3xl md:text-4xl font-normal font-heading leading-tight mb-5">
            Secured by trusted auditors.
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
             {['Sigma Prime', 'Code4rena', 'MixBytes'].map((auditor) => (
               <div key={auditor} className="bg-white border border-gray-200 px-4 py-2 text-sm text-slate-700 font-medium">
                  {auditor}
               </div>
             ))}
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all audit reports
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 border border-gray-200 text-center shadow-sm">
            <p className="text-4xl font-normal font-heading text-primary">3</p>
            <p className="text-sm text-slate-500 mt-1">Major Audits</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 text-center shadow-sm">
            <p className="text-4xl font-normal font-heading text-primary">5+</p>
            <p className="text-sm text-slate-500 mt-1">Security Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};
