import { MonitorCheck, Popcorn } from 'lucide-react';

export function Navbar() {
  return (
    <div className="sticky top-0 bg-white">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-6 md:px-24 lg:px-36 xl:px-40">
        <div className="flex items-center">
          <div className="group mr-3 flex cursor-pointer flex-col space-y-1">
            <span className="h-0.5 w-5 rounded-sm bg-slate-700 transition duration-300 group-hover:bg-slate-800"></span>
            <span className="h-0.5 w-5 rounded-sm bg-slate-700 transition duration-300 group-hover:bg-slate-800"></span>
            <span className="h-0.5 w-5 rounded-sm bg-slate-700 transition duration-300 group-hover:bg-slate-800"></span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg font-medium">usePopcorn</span>
            <Popcorn color="currentColor" />
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-slate-700 transition-colors duration-300 hover:text-slate-800"
          >
            <MonitorCheck color="currentColor" />
          </button>
        </div>
        <div className="fixed left-0 top-0 h-screen w-full bg-black px-[15%] py-[15%] text-white"></div>
      </div>
    </div>
  );
}
