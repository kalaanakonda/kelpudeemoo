import { Anchor } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-6 text-center text-slate-500">
        <div className="flex items-center justify-center gap-2 text-lg font-normal tracking-tight mb-4 text-slate-700">
          <div className="w-6 h-6 bg-slate-900 rounded-sm flex items-center justify-center text-white">
            <Anchor className="w-4 h-4 fill-current" />
          </div>
          <span className="font-heading">Restake Oasis</span>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Restake Oasis. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Documentation</a>
        </div>
      </div>
    </footer>
  );
}
