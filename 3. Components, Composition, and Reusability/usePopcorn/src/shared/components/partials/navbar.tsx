import { MonitorCheck, Popcorn, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/commons';

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggleNavbar = () => {
    setToggle(show => !show);
  };

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-6 md:px-24 lg:px-36 xl:px-40">
        <div className="flex items-center">
          <div
            className="group mr-3 flex cursor-pointer flex-col space-y-1 lg:hidden"
            onClick={handleToggleNavbar}
          >
            <span className="h-0.5 w-5 rounded-sm bg-slate-700 transition duration-300 group-hover:bg-slate-800"></span>
            <span className="h-0.5 w-5 rounded-sm bg-slate-700 transition duration-300 group-hover:bg-slate-800"></span>
            <span className="h-0.5 w-5 rounded-sm bg-slate-700 transition duration-300 group-hover:bg-slate-800"></span>
          </div>
          <div className="flex items-center space-x-1 text-orange-500">
            <span className="text-lg font-semibold">usePopcorn</span>
            <Popcorn size={20} color="currentColor" />
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-100 text-orange-500 transition-colors duration-300"
          >
            <MonitorCheck size={20} color="currentColor" />
          </button>
        </div>
        <div
          className={`fixed left-0 top-0 h-screen w-full px-[15%] py-[15%] text-white lg:hidden ${
            toggle ? 'block bg-[rgba(0,0,0,0.4)] backdrop-blur-md' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-7 text-xl font-medium text-white">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white transition-colors duration-300 hover:bg-orange-600"
              onClick={handleToggleNavbar}
            >
              <X />
            </button>
            <Link to={ROUTES.POPULAR}>Popular</Link>
            <Link to={ROUTES.TOPRATED}>Top Rated</Link>
            <Link to={ROUTES.UPCOMING}>Upcoming</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
