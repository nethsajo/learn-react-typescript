import { ROUTES } from '@/constants/routes';
import { Pizza, Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-b-gray-300">
      <div className="bg-red-700">
        <div className="mx-auto flex h-14 items-center px-4 sm:max-w-6xl sm:px-6">
          <Link to={ROUTES.HOME} className="flex items-center space-x-1 text-red-50">
            <Pizza />
            <span className="text-base font-medium tracking-wide sm:text-xl">OvenFreshPizza</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4 self-stretch">
            {/* <SearchOrder /> */}
            <Link to={`${ROUTES.ORDER}/track`} className="hidden text-red-50 sm:block">
              Track Order
            </Link>
            <Link
              to={`${ROUTES.ORDER}/track`}
              className="relative inline-flex h-full items-center px-2 text-red-50 transition-colors duration-150 hover:bg-zinc-200/10 sm:hidden"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              to={ROUTES.CART}
              className="relative inline-flex h-full items-center px-2 text-red-50 transition-colors duration-150 hover:bg-zinc-200/10"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-0.5 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-600">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
