import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-full w-[560px] rounded-bl-md rounded-tl-md bg-gray-700 p-6">
      <div className="flex h-full flex-col items-center">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/">
            <img src="/logo.png" alt="Worldwise Logo" className="h-10 sm:h-12" />
          </Link>
          <div className="flex items-center rounded-md bg-gray-800 p-1" tabIndex={0}>
            <NavLink
              to="cities"
              className={({ isActive }) =>
                `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-gray-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive || location.pathname === '/app' ? 'bg-gray-600 text-gray-200 shadow-sm' : 'bg-transparent text-gray-400'}`
              }
            >
              Cities
            </NavLink>
            <NavLink
              to="countries"
              className={({ isActive }) =>
                `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-gray-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-gray-600 text-gray-200 shadow-sm' : 'bg-transparent text-gray-400'}`
              }
            >
              Countries
            </NavLink>
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
