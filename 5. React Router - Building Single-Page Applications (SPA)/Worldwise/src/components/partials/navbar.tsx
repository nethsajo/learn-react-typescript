import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleNav = () => {
    setIsToggle(toggle => !toggle);
  };

  return (
    <header>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Worldwise Logo" className="h-10 sm:h-12 md:h-14" />
        </Link>
        <div
          className={`${isToggle ? 'pointer-events-auto visible translate-x-0 translate-y-0 opacity-100' : 'pointer-events-none invisible translate-x-full translate-y-full opacity-0'} fixed left-0 top-0 h-full w-full bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in md:pointer-events-auto md:visible md:static md:w-auto md:translate-x-0 md:translate-y-0 md:bg-transparent md:opacity-100`}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-8 font-medium uppercase text-slate-200 md:flex-row md:space-x-8 md:space-y-0">
            <Link to="/pricing">Pricing</Link>
            <Link to="/product">Product</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <button onClick={handleToggleNav} className="z-10 flex text-slate-200 md:hidden">
          {!isToggle ? <Menu className="h-8 w-8" /> : <X className="h-8 w-8" />}
        </button>
      </div>
    </header>
  );
}
