import type React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../partials/navbar';

export function PageLayout({ children }: React.PropsWithChildren) {
  const location = useLocation();

  const isIndex = location.pathname === '/';

  return (
    <main className="relative h-full overflow-hidden p-4 lg:rounded-md lg:p-6">
      <div
        className={`absolute inset-0 ${isIndex ? "bg-[url('/bg.jpg')]" : 'bg-gray-500'} bg-cover bg-center`}
      >
        <div className="h-full w-full bg-[rgba(36,42,46,0.8)]"></div>
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
