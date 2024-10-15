import { NavLink } from 'react-router-dom';

type SidebarLinkProps = {
  to: string;
  children: React.ReactNode;
};

export function SidebarLink({ to, children }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-gray-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-gray-600 text-gray-200 shadow-sm' : 'bg-transparent text-gray-400'}`
      }
    >
      {children}
    </NavLink>
  );
}
