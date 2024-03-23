import { MonitorCheck, Popcorn, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggleNavbar = () => {
    setToggle(show => !show);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-6 md:px-24 lg:px-36 xl:px-40">
        <div className="flex items-center">
          <div
            className="group mr-3 flex cursor-pointer flex-col space-y-1"
            onClick={handleToggleNavbar}
          >
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
        <div
          className={`fixed left-0 top-0 h-screen w-full px-[15%] py-[15%] text-white lg:hidden ${
            toggle ? 'block bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-7">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500"
            >
              <X />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
