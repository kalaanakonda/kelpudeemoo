import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto py-12 px-6 text-center text-slate-500">
        <div className="flex items-center justify-center gap-2 text-lg font-normal tracking-tight mb-4 text-slate-700">
          <Image src="https://raw.githubusercontent.com/kalaanakonda/videosyogi/950a3eeee6091494eb4f769e53b83e1425ab84f9/Frame%202147223315.svg" alt="Kelp logo" width={81} height={19} />
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Kelp. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Documentation</a>
        </div>
      </div>
    </footer>
  );
}
