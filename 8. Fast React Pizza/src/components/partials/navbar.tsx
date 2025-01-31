import { ROUTES } from '@/constants/routes';
import { SearchOrder } from '@/features/order/_components/search-order';
import { Pizza } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-b-gray-300">
      <div className="bg-red-700">
        <div className="flex h-14 items-center px-4 sm:px-6">
          <Link to={ROUTES.HOME} className="flex items-center space-x-1 text-red-50">
            <Pizza />
            <span className="text-lg font-medium tracking-wide">OvenFreshPizza</span>
          </Link>
          <div className="ml-auto">
            <SearchOrder />
          </div>
        </div>
      </div>
    </div>
  );
}
