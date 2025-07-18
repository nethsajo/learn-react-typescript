import { ROUTES } from '@/constants/routes';
import { Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
      <div className="bg-red-700">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6">
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 text-red-50">
            <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-md">
              <span className="text-xl font-bold text-red-600">🍕</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">OvenFreshPizza</h1>
              <p className="text-xs text-red-100">Authentic Italian Taste</p>
            </div>
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
              className="relative inline-flex h-full w-12 items-center text-red-50 transition-colors duration-150 hover:bg-zinc-200/10"
            >
              <ShoppingCart className="size-5 flex-1" />
              <span className="absolute right-1.5 top-6 flex size-4 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-600">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
