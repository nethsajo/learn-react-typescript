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
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex-1">
          <img src="/logo.png" alt="Worldwise Logo" className="h-14" />
        </Link>
        <div className="hidden space-x-8 font-medium uppercase text-slate-200">
          <Link to="/pricing">Pricing</Link>
          <Link to="/product">Product</Link>
          <Link to="/login">Login</Link>
        </div>
        <button onClick={handleToggleNav} className="text-slate-200">
          {!isToggle ? <Menu /> : <X />}
        </button>
      </div>
    </header>
  );
}
