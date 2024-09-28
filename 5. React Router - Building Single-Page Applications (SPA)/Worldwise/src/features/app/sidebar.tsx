import { ROUTES } from '@/constants/routes';
import { Link, Outlet } from 'react-router-dom';
import { SidebarLink } from './sidebar-link';

export function Sidebar() {
  return (
    <div className="order-2 h-[60%] w-full bg-gray-700 p-4 lg:order-1 lg:h-full lg:w-[560px] lg:rounded-bl-md lg:rounded-tl-md lg:p-6">
      <div className="mx-auto flex h-full max-w-lg flex-col items-center overflow-hidden">
        <div className="flex w-full flex-col items-center space-y-8 lg:px-10">
          <Link to="/">
            <img src="/logo.png" alt="Worldwise Logo" className="hidden h-10 sm:h-12 lg:block" />
          </Link>
          <div className="flex items-center rounded-md bg-gray-800 p-1 outline-none" tabIndex={0}>
            <SidebarLink to={ROUTES.CITIES}>Cities</SidebarLink>
            <SidebarLink to={ROUTES.COUNTRIES}>Countries</SidebarLink>
          </div>
          {/* The outlet element is just used to determine where child routes of parent routes should be displayed within the parent routes instead of a new page */}
          <Outlet />
        </div>
        <footer className="mt-auto">
          <p className="text-xs">&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        </footer>
      </div>
    </div>
  );
}
